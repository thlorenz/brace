ace.define("ace/theme/take",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-take";
exports.cssText = ".ace-take .ace_take-open {\
color: #00f\
}\
.ace-take .ace_take-complete {\
color: #f00;\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
