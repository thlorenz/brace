ace.define("ace/theme/zebra",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-zebra";
exports.cssText = ".ace-zebra .ace_gutter {\
background: #fff;\
color: #4D4D4C\
}\
.ace-zebra .ace_print-margin {\
width: 1px;\
background: #f6f6f6\
}\
.ace-zebra {\
background-color: #fff;\
color: #4D4D4C\
}\
.ace-zebra .ace_cursor {\
color: #AEAFAD\
}\
.ace-zebra .ace_marker-layer .ace_selection {\
background: #D6D6D6\
}\
.ace-zebra.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FFFFFF;\
}\
.ace-zebra .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0)\
}\
.ace-zebra .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #D1D1D1\
}\
.ace-zebra .ace_marker-layer .ace_active-line {\
background: #EFEFEF\
}\
.ace-zebra .ace_gutter-active-line {\
background-color : #dcdcdc\
}\
.ace-zebra .ace_marker-layer .ace_selected-word {\
border: 1px solid #D6D6D6\
}\
.ace-zebra .ace_invisible {\
color: #D1D1D1\
}\
.ace-zebra .ace_keyword,\
.ace-zebra .ace_meta,\
.ace-zebra .ace_storage,\
.ace-zebra .ace_storage.ace_type,\
.ace-zebra .ace_support.ace_type {\
color: #8959A8\
}\
.ace-zebra .ace_keyword.ace_operator {\
color: #3E999F\
}\
.ace-zebra .ace_constant.ace_character,\
.ace-zebra .ace_constant.ace_language,\
.ace-zebra .ace_constant.ace_numeric,\
.ace-zebra .ace_keyword.ace_other.ace_unit,\
.ace-zebra .ace_support.ace_constant,\
.ace-zebra .ace_variable.ace_parameter {\
color: #F5871F\
}\
.ace-zebra .ace_constant.ace_other {\
color: #666969\
}\
.ace-zebra .ace_invalid {\
color: #FFFFFF;\
background-color: #C82829\
}\
.ace-zebra .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #8959A8\
}\
.ace-zebra .ace_fold {\
background-color: #4271AE;\
border-color: #4D4D4C\
}\
.ace-zebra .ace_entity.ace_name.ace_function,\
.ace-zebra .ace_support.ace_function,\
.ace-zebra .ace_variable {\
color: #4271AE\
}\
.ace-zebra .ace_support.ace_class,\
.ace-zebra .ace_support.ace_type {\
color: #C99E00\
}\
.ace-zebra .ace_heading,\
.ace-zebra .ace_markup.ace_heading,\
.ace-zebra .ace_string {\
color: #718C00\
}\
.ace-zebra .ace_entity.ace_name.ace_tag,\
.ace-zebra .ace_entity.ace_other.ace_attribute-name,\
.ace-zebra .ace_meta.ace_tag,\
.ace-zebra .ace_string.ace_regexp,\
.ace-zebra .ace_variable {\
color: #C82829\
}\
.ace-zebra .ace_comment {\
color: #8E908C\
}\
.ace-zebra .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bdu3f/BwAlfgctduB85QAAAABJRU5ErkJggg==) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
