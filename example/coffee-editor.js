// initialize ace editor customized for coffee
var ace = require('brace/coffee');

// initialize coffee mode and monokai theme after editor itself
require('brace/mode/coffee');
require('brace/theme/monokai');

var editor = ace.edit('coffee-editor');
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/coffee');
