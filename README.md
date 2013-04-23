# brace

[See if your browser is supported](http://thlorenz.github.io/brace/).

[browserify](https://github.com/substack/node-browserify) compatible version of the [ace editor](http://ajaxorg.github.io/ace/).

[![browser support](http://ci.testling.com/thlorenz/brace.png)](http://ci.testling.com/thlorenz/brace)

## Installation

    npm install brace

## Example

```js
var ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');

var editor = ace.edit('javascript-editor');
editor.getSession().setMode('ace/mode/javascript');
editor.setTheme('ace/theme/monokai');
```

Include the above as an entry in your browserify build, add a `<div id="javascript-editor"></div>` to your html page and
a JavaScript editor will appear. 

This editor will show error/warning annotations if your browser supports WebWorkers
created via a blob URL (see testling support badge on top).

Please consult the [detailed example](https://github.com/thlorenz/brace/tree/master/example) for more information.

## Supported Workers

All workers included with ace are supported, except `php` and `xquery`, mainly because I wasn't able to properly
stringify their code (any help with that is appreciated).

## Test

    npm explore brace 
    npm test
