// initialize ace editor customized for javascript
var ace = require('brace');

// initialize javascript mode and monokai theme after editor itself
require('brace/mode/javascript');
require('brace/theme/monokai');

var editor = ace.edit('javascript-editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/javascript');
