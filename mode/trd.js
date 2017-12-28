ace.define('ace/mode/trd_highlight_rules', function (require, exports, module) {
    var TrdHighLightRules = function () {
        // regexp must not have capturing parentheses. Use (?:) instead.
        // regexps are ordered -> the first match is used
        this.$rules = {
            start: [
                {
                    token: 'string.quoted',
                    regex: /\?\w+/
                },
                {
                    token: 'comment',
                    regex: /(^|\s+)\/\*/,
                    next: 'comments'
                },
                {
                    token: 'string.quoted',
                    regex: /("|').*("|')/
                },
                {
                    token: 'keyword.operator',
                    regex: /\s*(floor|ceil|not|abs|exist_not|to_upper|to_lower|length_of|get_type|get_age|to_metaphone|to_date|to_time|to_int|to_long|to_real|to_bool|to_literal|is_bnode|is_literal|is_resource|is_no_value|create_bnode|create_resource|create_uuid_resource|create_literal|and|or|bit_and|bit_or|xor|pow|eq_case|ed_no_case|starts_with|ends_with|contains|is_type|get_age_as_of|levenshtein_distance|literal_regex|same_as|different_from|exist|text_max_cardinality|test_min_cardinality|test_cardinality|test_one_of|get_cardinality|coverage|sum_values|sorted_head|regex|lookup|multi_lookup|SELECT|FROM)\s/
                },
                {
                    token: 'variable.language',
                    regex: /\s()\s/
                },
                // the todo must come before comment
                {
                    token: 'comment.todo',
                    regex: /(^|\s+)#.*\s+(TODO|todo|Todo)\s+.*/
                },
                {
                    token: 'comment',
                    regex: /(^|\s+)#.*/
                },
                {
                    token: 'string',
                    regex: /(n|s)=[^\s,\]]*/
                },
                {
                    token: 'constant.language.boolean',
                    regex: /(top:|owl:|rdf:|rdfs:)\w+/
                },
                {
                    token: 'string',
                    regex: /(resource|text|string|bool|int|integer|unit|long_int|long_uint|real|duration|time|date|unset|section|schema)/
                },
                {
                    token: 'string',
                    regex: /\*(configuration|data-cache|schema|knowledge-rules|knowledge-base|secondary-knowledge-rules|post-knowledge-rules|assert-triples|import-owl|psearch-db|psearch-session|meta-graph|assert-graph)(-begin|-end)\*/
                }
            ],
            comments: [
                {
                    token: 'comment',
                    regex: /.*\*[\/]/,
                    next: 'start'
                },
                {
                    token: 'comment.todo',
                    regex: /(^|.*\s+)(TODO|todo|Todo)\s+.*$/
                },
                {
                    token: 'comment',
                    regex: /.*/
                }
            ]
        };
        this.normalizeRules();
    };
    var oop = require('../lib/oop');
    var TextHighlightRules = require('ace/mode/text_highlight_rules').TextHighlightRules;
    oop.inherits(TrdHighLightRules, TextHighlightRules);
    exports.TrdHighLightRules = TrdHighLightRules;
});

function validate() {

}
ace.define('ace/worker/my-worker',
    ['require', 'exports', 'module', 'ace/lib/oop', 'ace/worker/mirror'],
    function (require, exports, module) {
        var oop = require('ace/lib/oop');
        var Mirror = require('ace/worker/mirror').Mirror;

        var MyWorker = function (sender) {
            Mirror.call(this, sender);
            this.setTimeout(200);
            this.$dialect = null;
        };

        oop.inherits(MyWorker, Mirror);

        (function () {

            this.onUpdate = function () {
                console.log(this.doc);
                var value = this.doc.getValue();
                var annotations = validate(value);
                this.sender.emit('annotate', annotations);
            };

        }).call(MyWorker.prototype);

        exports.MyWorker = MyWorker;
    });
ace.define('ace/mode/trd',
    function (require, exports, module) {
        'use strict';
        const oop = require('../lib/oop');
        var TextMode = require('./text').Mode;
        var TrdHighLightRules = require('./trd_highlight_rules').TrdHighLightRules;
        var MatchingBraceOutdent = require('./matching_brace_outdent').MatchingBraceOutdent;
        var WorkerClient = require('../worker/worker_client').WorkerClient;
        var CstyleBehaviour = require('./behaviour/cstyle').CstyleBehaviour;
        var CStyleFoldMode = require('./folding/cstyle').FoldMode;
        var TrdHighlights = function () {
            this.HighlightRules = TrdHighLightRules;
            this.$outdent = new MatchingBraceOutdent();
            this.$behaviour = new CstyleBehaviour();
            this.foldingRules = new CStyleFoldMode();
        };
        oop.inherits(TrdHighlights, TextMode);
        (function () {
            this.$id = 'ace/mode/trd';
            this.createWorker = function (session) {
                console.log(session);
                this.$worker = new WorkerClient(['ace'],
                    'ace/worker/my-worker', 'MyWorker', '../js/my-worker.js');
                this.$worker.attachToDocument(session.getDocument());

                this.$worker.on('errors', function (e) {
                    session.setAnnotations(e.data);
                });

                this.$worker.on('annotate', function (e) {
                    console.log('annotate');
                    console.log(e);
                    session.setAnnotations(e.data);
                });

                this.$worker.on('terminate', function () {
                    session.clearAnnotations();
                });

                return this.$worker;

            };
        }).call(TrdHighlights.prototype);
        exports.Mode = TrdHighlights;
    });