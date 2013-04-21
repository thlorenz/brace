'use strict';

var path = require('path')
  , fs = require('fs');

var workers = { 
    coffee     :  [ 'coffee' ]
  , css        :  [ 'css', 'html', 'luapage', 'markdown', 'rhtml' ]
  , javascript :  [ 'coldfusion', 'curly', 'django', 'groovy', 'html', 'java', 'javascript', 'luapage', 'markdown', 'rhtml', 'scala', 'svg', 'typescript' ]
  , json       :  [ 'json' ]
  , lua        :  [ 'lua', 'luapage' ]
  , php        :  [ 'php' ]
  , xquery     :  [ 'xquery' ]
};

function getWorkers(lang) {
  return Object.keys(workers)
    .filter(function (k) {
      return ~workers[k].indexOf(lang);
    });
}

var ones = exports.onelanguage = [ 'ace-coffee', 'ace-css', 'ace-json', 'ace-lua', 'ace-php', 'ace-xquery', 'ace-javascript' ];
var twos = exports.twolanguages = [ 'ace-css-javascript' ];

var replace = exports.getInlines = function () {
  var inlines = {};
  var one = fs.readFileSync(path.join(__dirname, './worker-replacement-one.js'), 'utf-8')
    , two = fs.readFileSync(path.join(__dirname, './worker-replacement-two.js'), 'utf-8')
    ;

  ones.forEach(function (key) {
    var file = path.join(__dirname, '..', 'workers', key.split('-')[1] + '.js');
    var src = fs.readFileSync(file, 'utf-8');
    inlines[key] = one.replace('{{src}}', JSON.stringify(src));
  });

  twos.forEach(function (key) {
    var splits = key.split('-')
      , name1 = splits[1]
      , name2 = splits[2];

    var file1 = path.join(__dirname, '..', 'workers', name1 + '.js');
    var file2 = path.join(__dirname, '..', 'workers', name2 + '.js');

    var src1 = fs.readFileSync(file1, 'utf-8');
    var src2 = fs.readFileSync(file2, 'utf-8');

    inlines[key] = two
      .replace('{{name1}}', name1)
      .replace('{{name2}}', name2)
      .replace('{{src1}}', JSON.stringify(src1))
      .replace('{{src2}}', JSON.stringify(src2));

  });

  return  inlines;
};
