var antlr4 = require('antlr4');
var RULANGParser = require('../rules/RULANGParser');
var RULANGLexer = require('../rules/RULANGLexer');
var RULANGListener = require('../rules/RULANGListener');
module.exports = {
  antlr4: antlr4,
  RULANGLexer: RULANGLexer,
  RULANGListener: RULANGListener,
  RULANGParser: RULANGParser
}