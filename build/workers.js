'use strict';

var workers = module.exports =  { 
    coffee     :  [ 'coffee' ]
  , css        :  [ 'css', 'html', 'luapage', 'markdown', 'rhtml' ]
  , javascript :  [ 'coldfusion', 'curly', 'django', 'groovy', 'html', 'java', 'javascript', 'luapage', 'markdown', 'rhtml', 'scala', 'svg', 'typescript' ]
  , json       :  [ 'json' ]
  , lua        :  [ 'lua', 'luapage' ]
  , php        :  [ 'php' ]
  , xquery     :  [ 'xquery' ]
};

module.exports.supported = Object.keys(workers)
  .filter(function (w) { 
    return w !== 'php' && w !== 'xquery'; 
  });

function getWorkers(lang) {
  return Object.keys(workers)
    .filter(function (k) {
      return ~workers[k].indexOf(lang);
    });
}
