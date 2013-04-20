'use strict'

/*jshint asi: true */

var path = require('path');
require('shelljs/global');


+function cloneFreshAndRemoveUnneeded() {
  var root = path.join( __dirname, 'ace-build');
  rm('-rf', root) 
  exec('git clone git://github.com/ajaxorg/ace-builds.git ' + root);

  [ 'demo', 'kitchen-sink', 'src-min-noconflict', 'src-min', 'src', 'textarea' ]
  .forEach(function (dir) { rm('-rf', path.join(root, dir)) })

  rm(path.join(root, '*'));
}()
