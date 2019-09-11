ace.define("ace/theme/zebraDark",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-zebraDark";
    exports.cssText = ".ace-zebraDark .ace_gutter {\
background: #262626;\
color: rgba(255, 255, 255, 0.3)\
}\
.ace-zebraDark .ace_print-margin {\
width: 1px;\
background: #333\
}\
.ace_gutter-cell.ace_error {\
background-image: none;\
background: #6b3838\
}\
.ace-zebraDark {\
background-color: #262626;\
color: #F8F8F2;\
font-size: 14px;\
}\
.ace-zebraDark .ace_scrollbar-v {\
width: 7px !important;\
bottom: 7px !important;\
}\
.ace-zebraDark .ace_scrollbar-h {\
height: 7px !important;\
right: 7px !important;\
}\
.ace-zebraDark .ace_scroller {\
right: 0px !important;\
bottom: 0px !important;\
}\
.ace-zebraDark .ace_cursor {\
color: #F8F8F0\
}\
.ace-zebraDark .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-zebraDark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-zebraDark .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-zebraDark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-zebraDark .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-zebraDark .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-zebraDark .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-zebraDark .ace_invisible {\
color: #52524d\
}\
.ace-zebraDark .ace_entity.ace_name.ace_tag,\
.ace-zebraDark .ace_keyword,\
.ace-zebraDark .ace_meta.ace_tag,\
.ace-zebraDark .ace_storage {\
color: #F92672\
}\
.ace-zebraDark .ace_punctuation,\
.ace-zebraDark .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-zebraDark .ace_constant.ace_character,\
.ace-zebraDark .ace_constant.ace_numeric,\
.ace-zebraDark .ace_constant.ace_other {\
color: #00CCBB\
}\
.ace-zebraDark .ace_constant.ace_language{\
color: #0488E0\
}\
.ace-zebraDark .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-zebraDark .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-zebraDark .ace_support.ace_constant,\
.ace-zebraDark .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-zebraDark .ace_fold {\
background-color: #A6E22E;\
border-color: #585858;\
background-image: none;\
position: relative;\
background-color: rgba(255, 255, 255, 0);\
}\
.ace-zebraDark .ace_fold:after {\
    content: '...';\
    color: #fff;\
    position: absolute;\
    top: -7px;\
}\
.ace-zebraDark .ace_storage.ace_type,\
.ace-zebraDark .ace_support.ace_class,\
.ace-zebraDark .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-zebraDark .ace_entity.ace_name.ace_function,\
.ace-zebraDark .ace_entity.ace_other,\
.ace-zebraDark .ace_entity.ace_other.ace_attribute-name,\
.ace-zebraDark .ace_variable {\
color: #fff\
}\
.ace-zebraDark .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-zebraDark .ace_string {\
color: #FF809F\
}\
.ace-zebraDark .ace_comment {\
color: #75715E\
}\
.ace-zebraDark .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
