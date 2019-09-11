ace.define("ace/theme/zebraDark",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-zebraDark";
exports.cssText = ".ace-zebraDark .ace_gutter {\
background: #262626;\
color: #fff\
}\
.ace-zebraDark .ace_print-margin {\
width: 1px;\
background: #f6f6f6\
}\
.ace-zebraDark {\
background-color: #fff;\
color: #4D4D4C\
}\
.ace-zebraDark .ace_cursor {\
color: #AEAFAD\
}\
.ace-zebraDark .ace_marker-layer .ace_selection {\
background: #D6D6D6\
}\
.ace-zebraDark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-zebraDark .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-zebraDark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #D1D1D1\
}\
.ace-zebraDark .ace_marker-layer .ace_active-line {\
background: #EFEFEF\
}\
.ace-zebraDark .ace_gutter-active-line {\
background-color : #dcdcdc\
}\
.ace-zebraDark .ace_marker-layer .ace_selected-word {\
border: 1px solid #D6D6D6\
}\
.ace-zebraDark .ace_invisible {\
color: #D1D1D1\
}\
.ace-zebraDark .ace_keyword,\
.ace-zebraDark .ace_meta,\
.ace-zebraDark .ace_storage,\
.ace-zebraDark .ace_storage.ace_type,\
.ace-zebraDark .ace_support.ace_type {\
color: #8959A8\
}\
.ace-zebraDark .ace_keyword.ace_operator {\
color: #3E999F\
}\
.ace-zebraDark .ace_constant.ace_character,\
.ace-zebraDark .ace_constant.ace_language,\
.ace-zebraDark .ace_constant.ace_numeric,\
.ace-zebraDark .ace_keyword.ace_other.ace_unit,\
.ace-zebraDark .ace_support.ace_constant,\
.ace-zebraDark .ace_variable.ace_parameter {\
color: #F5871F\
}\
.ace-zebraDark .ace_constant.ace_other {\
color: #666969\
}\
.ace-zebraDark .ace_invalid {\
color: #FFFFFF;\
background-color: #C82829\
}\
.ace-zebraDark .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #8959A8\
}\
.ace-zebraDark .ace_fold {\
background-color: #4271AE;\
border-color: #4D4D4C\
}\
.ace-zebraDark .ace_entity.ace_name.ace_function,\
.ace-zebraDark .ace_support.ace_function,\
.ace-zebraDark .ace_variable {\
color: #4271AE\
}\
.ace-zebraDark .ace_support.ace_class,\
.ace-zebraDark .ace_support.ace_type {\
color: #C99E00\
}\
.ace-zebraDark .ace_heading,\
.ace-zebraDark .ace_markup.ace_heading,\
.ace-zebraDark .ace_string {\
color: #718C00\
}\
.ace-zebraDark .ace_entity.ace_name.ace_tag,\
.ace-zebraDark .ace_entity.ace_other.ace_attribute-name,\
.ace-zebraDark .ace_meta.ace_tag,\
.ace-zebraDark .ace_string.ace_regexp,\
.ace-zebraDark .ace_variable {\
color: #C82829\
}\
.ace-zebraDark .ace_comment {\
color: #8E908C\
}\
.ace-zebraDark .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
