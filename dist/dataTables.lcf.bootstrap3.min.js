/*!
 * @author Thomas <thansen@solire.fr>
 * @licence CC BY-NC 4.0 http://creativecommons.org/licenses/by-nc/4.0/
 *
 * Wrapper module for bootstrap datepicker
 *
 * https://github.com/eternicode/bootstrap-datepicker
 * to install : bower install bootstrap-datepicker#1.3.*
 * or add : "bootstrap-datepicker": "1.3.*" in your bower.json
 */
!function(){function e(e,t){"use strict";t.filter.selectBase=e.extend(!0,{},t.filter.select),t.filter.select={},e.extend(t.filter.select,t.filter.selectBase,{dom:function(e){return t.filter.selectBase.dom.call(this,e),this.elements.addClass("form-control input-sm"),this.elements}}),t.filter.inputBase=e.extend(!0,{},t.filter.input),t.filter.input={},e.extend(t.filter.input,t.filter.inputBase,{dom:function(e){return t.filter.inputBase.dom.call(this,e),this.elements.addClass("form-control input-sm"),this.elements}}),t.filter.rangeBase=e.extend(!0,{},t.filter.range),t.filter.range={},e.extend(t.filter.range,t.filter.rangeBase,{dom:function(e){return t.filter.rangeBase.dom.call(this,e),this.elements.addClass("form-control input-sm"),this.elements}})}"function"==typeof define&&define.amd?define(["jquery","datatables-columnfilter"],e):"object"==typeof exports?e(require("jquery"),require("datatables-columnfilter")):jQuery&&e(jQuery,jQuery.fn.dataTable.ColumnFilter)}(window,document);