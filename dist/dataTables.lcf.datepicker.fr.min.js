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
!function(){function e(n,t){"use strict";n.fn.datepicker.defaults.format="dd/mm/yyyy",t.filter.rangeBase=n.extend(!0,{},t.filter.range),t.filter.range={},n.extend(t.filter.range,t.filter.rangeBase,{separator:"~",dom:function(e){return t.filter.rangeBase.dom.call(this,e),this.elements.addClass("form-control input-sm"),this.elements},bindEvents:function(){var e=this;e.elements.datepicker().on("changeDate",function(){e.search()})},format:function(e){return e.split("/").reverse().join("-")},request:function(){var t=this,r=[];return t.elements.each(function(){var e=n(this).val();e=t.options.format(e),r.push(e)}),r.join(t.options.separator)}})}"function"==typeof define&&define.amd?define(["jquery","datatables-columnfilter","datepicker"],e):"object"==typeof exports?e(require("jquery"),require("datatables-columnfilter"),require("datepicker")):jQuery&&e(jQuery,jQuery.fn.dataTable.ColumnFilter)}(window,document);