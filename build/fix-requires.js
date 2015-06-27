'use strict';

module.exports = function (src) {
  var fixed = src;
  return fixed

    // replace all requires with acequires
    .replace(/require/g, 'acequire')
    
    // unreplace the ones we shouldn't have replaced
    .replace(/['"]acequire['"]/g, '"require"')

    // unreplace Emmet's require method
    .replace(/emmet\.acequire/g, 'emmet.require')
  ;
};
