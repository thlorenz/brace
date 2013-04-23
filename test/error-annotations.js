'use strict';
/*jshint asi: true, browser: true */

var test = require('tape')


+function setup() {

  function createEditorElem(lang) {
    var elem = document.createElement('div')
    elem.setAttribute('id', lang + '-editor')
    elem.setAttribute('class', 'editor')
    document.body.appendChild(elem)
  }

  function loadStyle() {
    var css = require('./stringified/style');
    var head   =  document.getElementsByTagName('head')[0];
    var style =  document.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  }

  ['javascript', 'coffee', 'json', 'lua'].forEach(createEditorElem);
  loadStyle();

  require('../example/javascript-editor');
  require('../example/coffee-editor');
  require('../example/json-editor');
  require('../example/lua-editor');
}()


