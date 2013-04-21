'use strict'

/*jshint asi: true */

var path    =  require('path');
var fs      =  require('fs');
var workers =  require('./workers');

require('shelljs/global');

var braceroot    =  path.join(__dirname, '..');
var themesdir    =  path.join(braceroot, 'themes');
var languagesdir =  path.join(braceroot, 'languages');
var workersdir   =  path.join(braceroot, 'workers');
var buildroot    =  path.join(__dirname, 'ace-build');

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
    rm('-rf', themesdir);
    mkdir(themesdir);
    mv(path.join(buildroot, 'theme-*.js'), themesdir + '/');
  }()

  +function languages() {
    rm('-rf', languagesdir);
    mkdir(languagesdir);

    ls(path.join(buildroot, 'mode-*.js'))
      .forEach(function (file) {
        var filename = path.basename(file).slice('mode-'.length);
        mv(file, path.join(languagesdir, filename));
      });
  }()

  +function workers() {
    rm('-rf', workersdir);
    mkdir(workersdir);

    ls(path.join(buildroot, 'worker-*.js'))
      .forEach(function (file) {
        var filename = path.basename(file).slice('worker-'.length);
        mv(file, path.join(workersdir, filename));
      });
  }()

}//()

+function generateAcesForEachWorkerCombination () {
  var acesrc = fs.readFileSync(path.join(buildroot, 'ace.js'), 'utf-8');
  var rx = /this\.\$worker *= *new +Worker\(workerUrl\);/;
  var inlines = workers.getInlines();
  Object.keys(inlines)
    .forEach(function (k) {
      var src = acesrc.replace(rx, inlines[k]);
      var p = path.join(braceroot, k + '.js'); 
      fs.writeFileSync(p, src, 'utf-8');
    });
}()
