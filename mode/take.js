ace.define('ace/mode/take_highlight_rules',['require','exports','module','ace/lib/oop','ace/mode/text_highlight_rules'], function(acequire, exports, module) {

'use strict';
var oop = acequire('../lib/oop');
var TextHighlightRules = acequire('./text_highlight_rules').TextHighlightRules;

var TakeHighlightRules = function() {
  this.$rules = {
    'start': [{
      token: 'take-complete',
      regex: /\[.*?\]/
    },
    { 
      token: 'take-open',
      regex: /\[.*/
    }]
  };
};

oop.inherits(TakeHighlightRules, TextHighlightRules);
exports.TakeHighlightRules = TakeHighlightRules;
});

ace.define('ace/mode/take',['require','exports','module','ace/lib/oop','ace/mode/text','ace/mode/json_highlight_rules','ace/mode/matching_brace_outdent','ace/mode/behaviour/cstyle','ace/mode/folding/cstyle','ace/worker/worker_client'], function(acequire, exports, module) {
'use strict';

var oop = acequire('../lib/oop');
var TakeHighlightRules = acequire('./take_highlight_rules').TakeHighlightRules;
var TextMode = acequire('./text').Mode;
var Behaviour = acequire('./behaviour').Behaviour;

var Mode = function() {
    this.HighlightRules = TakeHighlightRules;
    this.$behaviour = new Behaviour();
};

oop.inherits(Mode, TextMode);

(function() {
    this.type = 'text';
    this.getNextLineIndent = function() {
        return '';
    };
    this.$id = 'ace/mode/take';
}).call(Mode.prototype);

exports.Mode = Mode;
});