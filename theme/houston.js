ace.define("ace/theme/houston",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-houston";
    exports.cssText = ".ace-houston .ace_gutter {\
background: #3c3c3c;\
color: rgba(255, 255, 255, 0.3)\
}\
.ace-houston .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace_gutter-cell.ace_error {\
background-image: none;\
background: #6b3838\
}\
.ace-houston {\
background-color: #333333;\
color: #F8F8F2;\
font-size: 14px;\
}\
.ace-houston .ace_scrollbar-v {\
width: 7px !important;\
bottom: 7px !important;\
}\
.ace-houston .ace_scrollbar-h {\
height: 7px !important;\
right: 7px !important;\
}\
.ace-houston .ace_scroller {\
right: 0px !important;\
bottom: 0px !important;\
}\
.ace-houston .ace_cursor {\
color: #F8F8F0\
}\
.ace-houston .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-houston.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-houston .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-houston .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-houston .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-houston .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-houston .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-houston .ace_invisible {\
color: #52524d\
}\
.ace-houston .ace_entity.ace_name.ace_tag,\
.ace-houston .ace_keyword,\
.ace-houston .ace_meta.ace_tag,\
.ace-houston .ace_storage {\
color: #F92672\
}\
.ace-houston .ace_punctuation,\
.ace-houston .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-houston .ace_constant.ace_character,\
.ace-houston .ace_constant.ace_numeric,\
.ace-houston .ace_constant.ace_other {\
color: #00CCBB\
}\
.ace-houston .ace_constant.ace_language{\
color: #0488E0\
}\
.ace-houston .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-houston .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-houston .ace_support.ace_constant,\
.ace-houston .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-houston .ace_fold {\
background-color: #A6E22E;\
border-color: #585858;\
background-image: none;\
position: relative;\
background-color: rgba(255, 255, 255, 0);\
}\
.ace-houston .ace_fold:after {\
    content: '...';\
    color: #fff;\
    position: absolute;\
    top: -7px;\
}\
.ace-houston .ace_storage.ace_type,\
.ace-houston .ace_support.ace_class,\
.ace-houston .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-houston .ace_entity.ace_name.ace_function,\
.ace-houston .ace_entity.ace_other,\
.ace-houston .ace_entity.ace_other.ace_attribute-name,\
.ace-houston .ace_variable {\
color: #fff\
}\
.ace-houston .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-houston .ace_string {\
color: #FF809F\
}\
.ace-houston .ace_comment {\
color: #75715E\
}\
.ace-houston .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
