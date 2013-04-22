'use strict'

/*jshint asi: true */

var path    =  require('path');
var fs      =  require('fs');
var workers =  require('./workers');
var fixRequires = require('./fix-requires');

require('shelljs/global');

var braceroot =  path.join(__dirname, '..');
var themedir  =  path.join(braceroot, 'theme');
var modedir   =  path.join(braceroot, 'mode');
var workerdir =  path.join(braceroot, 'worker');
var buildroot =  path.join(__dirname, 'ace-build');

+function updateCleanAndPutInOrder() {

  +function cloneFreshAndRemoveUnneeded() {
    rm('-rf', buildroot) 
    exec('git clone git://github.com/ajaxorg/ace-builds.git ' + buildroot);

    [ 'demo', 'kitchen-sink', 'src-min-noconflict', 'src-min', 'src', 'textarea' ]
      .forEach(function (dir) { rm('-rf', path.join(buildroot, dir)) })

    rm(path.join(buildroot, '*'));

    // move src-noconflict files to root after we cleaned it since that is all we need
    mv(path.join(buildroot, 'src-noconflict/*'), buildroot)
    rm('-rf', path.join(buildroot, 'src-noconflict'));
  }()


  +function themes() {
    rm('-rf', themedir);
    mkdir(themedir);

    ls(path.join(buildroot, 'theme-*.js'))
      .forEach(function (file) {
        var filename = path.basename(file).slice('theme-'.length);
        mv(file, path.join(themedir, filename));
      });
  }()

  +function modes() {
    rm('-rf', modedir);
    mkdir(modedir);

    ls(path.join(buildroot, 'mode-*.js'))
      .forEach(function (file) {
        var filename = path.basename(file).slice('mode-'.length);
        mv(file, path.join(modedir, filename));
      });
  }()

  +function workers() {
    rm('-rf', workerdir);
    mkdir(workerdir);

    ls(path.join(buildroot, 'worker-*.js'))
      .forEach(function (file) {
        var filename = path.basename(file).slice('worker-'.length);
        mv(file, path.join(workerdir, filename));
      });
  }()

}()

+function requires() {
  function fixAllRequires(dir) {
    ls(path.join(dir, '*.js'))
      .forEach(function (file) {
        var src = fs.readFileSync(file, 'utf-8');
        var fixed = fixRequires(src);
        fs.writeFileSync(file, fixed, 'utf-8');
      });
  }

  fixAllRequires(themedir);
  fixAllRequires(modedir);
  fixAllRequires(workerdir);
  fixAllRequires(buildroot);
}()

+function generateAcesForEachWorkerCombination () {
  var acesrc = fs.readFileSync(path.join(buildroot, 'ace.js'), 'utf-8');
  var rx = /this\.\$worker *= *new +Worker\(workerUrl\);/;
  var inlines = workers.getInlines();
  Object.keys(inlines)
    .forEach(function (k) {
      var src = acesrc.replace(rx, inlines[k]);
      src += '\nmodule.exports = window.ace.acequire("ace/ace");';
      var p = path.join(braceroot, k + '.js'); 
      fs.writeFileSync(p, src, 'utf-8');
    });
}()
