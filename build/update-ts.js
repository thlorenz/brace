'use strict'

/*jshint asi: true */

var path             =  require('path');
var fs               =  require('fs');
var fixRequires      =  require('./fix-requires');

require('shelljs/global');

var braceroot     =  path.join(__dirname, '..');
var buildroot     =  path.join(__dirname, 'DefinitelyTyped');

+function cloneFreshAndRemoveUnneeded() {
  rm('-rf', buildroot)
  exec('git clone git://github.com/DefinitelyTyped/DefinitelyTyped.git ' + buildroot);

  ls(buildroot).filter(function (name) { return name !== 'ace'; })
    .forEach(function (name) { rm('-rf', path.join(buildroot, name)) })

  // move ace files to root after we cleaned it since that is all we need
  mv(path.join(buildroot, 'ace/*'), buildroot)
  rm('-rf', path.join(buildroot, 'ace'));
}()

+function requires() {
  var file = path.join(buildroot, 'index.d.ts')
  var src = fs.readFileSync(file, 'utf-8');
  var fixed = fixRequires(src);
  fs.writeFileSync(file, fixed, 'utf-8');
}()

+function modularize() {
  var tssrc = fs.readFileSync(path.join(buildroot, 'index.d.ts'), 'utf-8');

  // Make these definitions a module by exporting the namespace
  var src = tssrc.replace('declare var ace: AceAjax.Ace;', 'export = AceAjax;');

  // We can't export an interface from within the namespace, so we remove the
  // Ace interface and export the contained functions directly.

  // This is easier done line-by-line.
  var srclines = src.split('\n');
  var in_body = false;
  for (var i = 0; i < srclines.length; i++) {
    if (!in_body) {
      if (srclines[i].includes("export interface Ace")) {
        // Once we hit the Ace interface, we'll start rewriting declarations
        srclines[i] = "" // Remove the interface export
        in_body = true;
      }
    } else {
      if (/\S+\(.+\):.*;/.test(srclines[i])) {
        // If the line is a function declaration, export it
        srclines[i] = "export function " + srclines[i];
      } else if (/\s+\}$/.test(srclines[i])) {
        // If we hit a closing brace, we assume we're done the interface.
        // This could become wrong in the future, but for now it's right.
        srclines[i] = ""
        break;
      }
    }
  }

  src = srclines.join("\n");
  fs.writeFileSync(path.join(braceroot, 'index.d.ts'), src, 'utf-8');
}()
