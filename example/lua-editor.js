var ace = require('brace');
require('brace/mode/lua');
require('brace/theme/solarized_dark');

var editor = ace.edit('lua-editor');
editor.setTheme('ace/theme/solarized_dark');
editor.getSession().setMode('ace/mode/lua');
