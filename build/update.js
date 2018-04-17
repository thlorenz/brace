'use strict'

/*jshint asi: true */

var path = require('path');
var fs = require('fs');
var workers = require('./workers');
var stringifyWorkers = require('./stringify-workers');
var fixRequires = require('./fix-requires');

require('shelljs/global');

var braceroot = path.join(__dirname, '..');
var themedir = path.join(braceroot, 'theme');
var modedir = path.join(braceroot, 'mode');
var extdir = path.join(braceroot, 'ext');
var snippetsdir = path.join(braceroot, 'snippets');
var keybindingdir = path.join(braceroot, 'keybinding');
var workersrcdir = path.join(braceroot, 'workersrc');
var workerdir = path.join(braceroot, 'worker');
var buildroot = path.join(__dirname, 'ace-build');

var aceTag = 'v1.2.9';

+function updateCleanAndPutInOrder() {
    +function cloneFreshAndRemoveUnneeded() {
        rm('-rf', buildroot)
        exec('git clone git://github.com/ajaxorg/ace-builds.git ' + buildroot);
        exec('(cd ' + buildroot + ' && git pull && git checkout ' + aceTag + ')');

        ['demo', 'kitchen-sink', 'src-min', 'src', 'textarea']
            .forEach(function (dir) {
                rm('-rf', path.join(buildroot, dir))
            })

        rm(path.join(buildroot, '*'));

        // move src-noconflict files to root after we cleaned it since that is all we need
        mv(path.join(buildroot, 'src-min-noconflict/snippets'), buildroot);
        mv(path.join(buildroot, 'src-noconflict/*'), buildroot);

        rm('-rf', path.join(buildroot, 'src-min-noconflict'));
        rm('-rf', path.join(buildroot, 'src-noconflict'));
    }()
    + function exts() {
        rm('-rf', extdir);
        mkdir(extdir);

        ls(path.join(buildroot, 'ext-*.js'))
            .forEach(function (file) {
                var filename = path.basename(file).slice('ext-'.length);
                mv(file, path.join(extdir, filename));
            });
    }()

    + function keybindings() {
        rm('-rf', keybindingdir);
        mkdir(keybindingdir);

        ls(path.join(buildroot, 'keybinding-*.js'))
            .forEach(function (file) {
                var filename = path.basename(file).slice('keybinding-'.length);
                mv(file, path.join(keybindingdir, filename));
            });
    }()
}()

+ function requires() {
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
    fixAllRequires(keybindingdir);
    // fixAllRequires(workersrcdir);
    fixAllRequires(buildroot);
}()

+ function snippets() {
    rm('-rf', snippetsdir);
    mkdir(snippetsdir);

    ls(path.join(buildroot, 'snippets/*.js'))
        .forEach(function (file) {
            mv(file, path.join(snippetsdir, path.basename(file)));
        });
}()

+ function injectWorkersIntoModes() {
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

+ function workers() {
    var acesrc = fs.readFileSync(path.join(buildroot, 'ace.js'), 'utf-8');

    var pattern1Count = 2;
    var pattern2Count = 2;
    var pattern3Count = 2;
    var pattern4Count = 1;
    var src = acesrc
    // VERY BRITTLE - may easily break with future ace versions
    // replace mod with mod.id in the following two lines inside
    // WorkerClient  function definition
    //  * workerUrl = config.moduleUrl(mod, "worker");
    //  * module: mod,
        .replace(/(:|\()\s*mod\b/g, function (m) {
            pattern1Count--;
            return m + ".id";
        })
        .replace(/createWorker\(workerUrl\)/g, function () {
            pattern2Count--;
            return "createWorker(workerUrl, mod)";
        })
        .replace(/\$workerBlob\(workerUrl\)/g, function () {
            pattern3Count--;
            return "$workerBlob(workerUrl, mod)";
        })
        .replace(/(var script = )("importScripts\()/g, function (_, m1, m2) {
            pattern4Count--;
            return m1 + "mod.src;" + m2;
        });

    if (pattern1Count || pattern2Count || pattern3Count || pattern4Count)
        throw new Error("Worker initalization code requires manual change!");

    src += '\nmodule.exports = window.ace.acequire("ace/ace");';
    fs.writeFileSync(path.join(braceroot, 'index.js'), src, 'utf-8');

    rm('-rf', workerdir);
    mkdir(workerdir);
    stringifyWorkers();
}();
