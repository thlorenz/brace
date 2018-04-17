'use strict';

var workers = module.exports =  {
  javascript :  [ 'coldfusion', 'curly', 'django', 'groovy', 'html', 'java', 'javascript', 'luapage', 'markdown', 'rhtml', 'scala', 'svg', 'typescript' ]
  , json       :  [ 'json' ]
  , trd        :  [ 'trd' ]
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
