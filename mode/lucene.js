ace.define('ace/mode/lucene', ["require", 'exports', 'module' , 'ace/lib/oop', 'ace/mode/text', 'ace/tokenizer', 'ace/mode/lucene_highlight_rules'], function(acequire, exports, module) {


var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var Tokenizer = acequire("../tokenizer").Tokenizer;
var LuceneHighlightRules = acequire("./lucene_highlight_rules").LuceneHighlightRules;

var Mode = function() {
    this.$tokenizer =  new Tokenizer(new LuceneHighlightRules().getRules());
};

oop.inherits(Mode, TextMode);

exports.Mode = Mode;
});ace.define('ace/mode/lucene_highlight_rules', ["require", 'exports', 'module' , 'ace/lib/oop', 'ace/lib/lang', 'ace/mode/text_highlight_rules'], function(acequire, exports, module) {


var oop = acequire("../lib/oop");
var lang = acequire("../lib/lang");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var LuceneHighlightRules = function() {
    this.$rules = {
        "start" : [
            {
                token : "constant.character.negation",
                regex : "[\\-]"
            }, {
                token : "constant.character.interro",
                regex : "[\\?]"
            }, {
                token : "constant.character.asterisk",
                regex : "[\\*]"
            }, {
                token: 'constant.character.proximity',
                regex: '~[0-9]+\\b'
            }, {
                token : 'keyword.operator',
                regex: '(?:AND|OR|NOT)\\b'
            }, {
                token : "paren.lparen",
                regex : "[\\(]"
            }, {
                token : "paren.rparen",
                regex : "[\\)]"
            }, {
                token : "keyword",
                regex : "[\\S]+:"
            }, {
                token : "string",           // " string
                regex : '".*?"'
            }, {
                token : "text",
                regex : "\\s+"
            }
        ]
    };
};

oop.inherits(LuceneHighlightRules, TextHighlightRules);

exports.LuceneHighlightRules = LuceneHighlightRules;
});
