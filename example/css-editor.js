// initialize ace editor customized for css
var ace = require('brace/css');

// initialize css mode and monokai theme after editor itself
require('brace/mode/css');
require('brace/theme/monokai');

var editor = ace.edit('css-editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/css');
