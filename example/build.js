'use strict';
var browserify =  require('browserify')
  , fs         =  require('fs');

browserify()
  .require(require.resolve('./main'), { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(__dirname + '/bundle.js'));
