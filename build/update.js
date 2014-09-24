'use strict'

/*jshint asi: true */

var path             =  require('path');
var fs               =  require('fs');
var workers          =  require('./workers');
var stringifyWorkers =  require('./stringify-workers');
var fixRequires      =  require('./fix-requires');

require('shelljs/global');

var braceroot    =  path.join(__dirname, '..');
var themedir     =  path.join(braceroot, 'theme');
var modedir      =  path.join(braceroot, 'mode');
var extdir      =  path.join(braceroot, 'ext');
var workersrcdir =  path.join(braceroot, 'workersrc');
var workerdir    =  path.join(braceroot, 'worker');
var buildroot    =  path.join(__dirname, 'ace-build');

var aceTag = 'v1.1.7';

+function updateCleanAndPutInOrder() {

  +function cloneFreshAndRemoveUnneeded() {
    rm('-rf', buildroot) 
    exec('git clone git://github.com/ajaxorg/ace-builds.git ' + buildroot);
    exec('(cd ' + buildroot + ' && git pull && git checkout ' + aceTag + ')');

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
    
  +function exts() {
    rm('-rf', extdir);
    mkdir(extdir);

    ls(path.join(buildroot, 'ext-*.js'))
      .forEach(function (file) {
        var filename = path.basename(file).slice('ext-'.length);
        mv(file, path.join(extdir, filename));
      });
  }()
    
  +function workers() {
    rm('-rf', workersrcdir);
    mkdir(workersrcdir);

    ls(path.join(buildroot, 'worker-*.js'))
      .forEach(function (file) {
        var filename = path.basename(file).slice('worker-'.length);
        mv(file, path.join(workersrcdir, filename));
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
  fixAllRequires(extdir);
  fixAllRequires(workersrcdir);
  fixAllRequires(buildroot);
}()

+function injectWorkersIntoModes() {
  ls(path.join(modedir, '*.js'))
    .forEach(function (file) {
      var src = fs.readFileSync(file, 'utf-8');
      var fixed = src;
      workers.supported
        .forEach(function (lang) {
          fixed = fixed
            .replace(
                '"ace/mode/' + lang + '_worker"'
              , 'require("../worker/' + lang + '")'
            );
        });

      fs.writeFileSync(file, fixed, 'utf-8');
    });
}()

+function workers() {
  var acesrc = fs.readFileSync(path.join(buildroot, 'ace.js'), 'utf-8');
  var workerBlob = fs.readFileSync(path.join(__dirname, 'worker-blob.js'), 'utf-8');

  var newWorkerRx = /this\.\$worker *= *new +Worker\(workerUrl\);/;
  var src = acesrc
    // VERY BRITTLE - may easily break with future ace versions
    // replace mod with mod.id in the following two lines inside 
    // WorkerClient  function definition
    //  * workerUrl = config.moduleUrl(mod, "worker");
    //  * module: mod,
    .replace('workerUrl = workerUrl || config.moduleUrl(mod, "worker");', 'workerUrl = workerUrl || config.moduleUrl(mod.id, "worker")')
    .replace('module : mod,', 'module : mod.id,')
    .replace(newWorkerRx, workerBlob);

  src += '\nmodule.exports = window.ace.acequire("ace/ace");';
  fs.writeFileSync(path.join(braceroot, 'index.js'), src, 'utf-8');

  rm('-rf', workerdir);
  mkdir(workerdir);
  stringifyWorkers(); 
}();
