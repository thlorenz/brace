ace.define("ace/theme/houstonLight",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-houstonLight";
    exports.cssText = ".ace-houstonLight .ace_gutter {\
background: #fff;\
color: #656565\
}\
.ace-houstonLight .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace_gutter-cell.ace_error {\
background-image: none;\
background: #6b3838\
}\
.ace-houstonLight {\
background-color: #333333;\
color: #F8F8F2;\
font-size: 14px;\
}\
.ace-houstonLight .ace_scrollbar-v {\
width: 7px !important;\
bottom: 7px !important;\
}\
.ace-houstonLight .ace_scrollbar-h {\
height: 7px !important;\
right: 7px !important;\
}\
.ace-houstonLight .ace_scroller {\
right: 0px !important;\
bottom: 0px !important;\
}\
.ace-houstonLight .ace_cursor {\
color: #F8F8F0\
}\
.ace-houstonLight .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-houstonLight.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-houstonLight .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-houstonLight .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-houstonLight .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-houstonLight .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-houstonLight .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-houstonLight .ace_invisible {\
color: #52524d\
}\
.ace-houstonLight .ace_entity.ace_name.ace_tag,\
.ace-houstonLight .ace_keyword,\
.ace-houstonLight .ace_meta.ace_tag,\
.ace-houstonLight .ace_storage {\
color: #F92672\
}\
.ace-houstonLight .ace_punctuation,\
.ace-houstonLight .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-houstonLight .ace_constant.ace_character,\
.ace-houstonLight .ace_constant.ace_numeric,\
.ace-houstonLight .ace_constant.ace_other {\
color: #00CCBB\
}\
.ace-houstonLight .ace_constant.ace_language{\
color: #0488E0\
}\
.ace-houstonLight .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-houstonLight .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-houstonLight .ace_support.ace_constant,\
.ace-houstonLight .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-houstonLight .ace_fold {\
background-color: #A6E22E;\
border-color: #585858;\
background-image: none;\
position: relative;\
background-color: rgba(255, 255, 255, 0);\
}\
.ace-houstonLight .ace_fold:after {\
    content: '...';\
    color: #fff;\
    position: absolute;\
    top: -7px;\
}\
.ace-houstonLight .ace_storage.ace_type,\
.ace-houstonLight .ace_support.ace_class,\
.ace-houstonLight .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-houstonLight .ace_entity.ace_name.ace_function,\
.ace-houstonLight .ace_entity.ace_other,\
.ace-houstonLight .ace_entity.ace_other.ace_attribute-name,\
.ace-houstonLight .ace_variable {\
color: #fff\
}\
.ace-houstonLight .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-houstonLight .ace_string {\
color: #FF809F\
}\
.ace-houstonLight .ace_comment {\
color: #75715E\
}\
.ace-houstonLight .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});
