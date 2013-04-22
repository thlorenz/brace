'use strict';

// require the javascript specific ace just as ace since this is how we exposed it in the build script
var ace = require('ace');

// require mode and theme under the id we exposed theme as in the build script
// note that ace has to be required first since mode and theme depend on it being initialized
require('ace/mode/javascript');
require('ace/theme/monokai');

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
