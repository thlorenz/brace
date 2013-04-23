'use strict';
/*jshint asi: true, browser: true */

var test = require('tape');

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

  require('./fixtures/javascript-editor');
  require('./fixtures/coffee-editor');
  require('./fixtures/json-editor');
  require('./fixtures/lua-editor');
}()

test('error annotations provided by inlined worker', function (t) {
  function getError(lang) {
    var editor = document.getElementById(lang + '-editor');
    var errors = editor.getElementsByClassName('ace_error')
    return { length: errors.length, line: errors[0] && errors[0].textContent }
  }

  // give editors time to initialize and workers to do the annotations
  setTimeout(function () {
  
    var err;
    err = getError('javascript')
    t.equal(err.length, 1, 'javascript editor shows one error')
    t.equal(err.line, '5', 'on line 5')

    err = getError('coffee')
    t.equal(err.length, 1, 'coffee editor shows one error')
    t.equal(err.line, '5', 'on line 5')

    err = getError('json')
    t.equal(err.length, 1, 'json editor shows one error')
    t.equal(err.line, '5', 'on line 5')

    err = getError('lua')
    t.equal(err.length, 1, 'lua editor shows one error')
    t.equal(err.line, '6', 'on line 6')

    t.end()
  }, 4000);
})
