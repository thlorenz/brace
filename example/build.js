'use strict';
var browserify =  require('browserify')
  , fs         =  require('fs');

var bundle = module.exports = function () {
  return browserify()
    .require('brace/ace-javascript'    ,  { expose: 'ace' })
    .require('brace/mode/javascript'   ,  { expose: 'ace/mode/javascript' })
    .require('brace/theme/monokai'     ,  { expose: 'ace/theme/monokai' })
    .require(require.resolve('./main') ,  { entry: true })
    .bundle({ debug: true });
};

if (!module.parent)
  bundle().pipe(fs.createWriteStream(__dirname + '/bundle.js'));
