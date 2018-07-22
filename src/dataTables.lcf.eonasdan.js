
(function(window, document) {
  var factory = function($, ColumnFilter) {
    'use strict';

    ColumnFilter.filter.range = {};
    ColumnFilter.filter.rangeBase = $.extend(true, {},
      ColumnFilter.filter.range);

    $.extend(
      ColumnFilter.filter.range,
      ColumnFilter.filter.rangeBase,
      {
        separator: '~',
        dom: function(th) {
          var self = this;

          // Picker widgets need to be inside a relative-positioned element
          th.css('position', 'relative');

          var element = $('<input>', {type: self.options.type || 'text'});
          $.each(self.options.attr, function(key, value) {
            element.attr(key, value);
          });

          self.startElement = element.clone();
          $.each(self.options.startAttr, function(key, value) {
            self.startElement.attr(key, value);
          });

          self.endElement = element.clone();
          $.each(self.options.endAttr, function(key, value) {
            self.endElement.attr(key, value);
          });

          self.elements = self.startElement.datetimepicker(self.options.picker)
            .add(self.endElement.datetimepicker(self.options.picker))
            .appendTo(th);

          return self.elements;
        },
        bindEvents: function() {
          var self = this;

          self.startElement.on('dp.change', function() {
            self.search();
          });
          self.endElement.on('dp.change', function() {
            self.search();
          });
        },
        request: function() {
          var self = this;

          return [
            self.startElement.val(), self.endElement.val(),
          ].join(self.options.separator);
        },
      }
    );
  };

  // Define as an AMD module if possible
  if (typeof define === 'function' && define.amd) {
    define([
      'jquery',
      'datatables-columnfilter',
      'eonasdan-bootstrap-datetimepicker',
    ], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(
      require('jquery'),
      require('datatables-columnfilter'),
      require('eonasdan-bootstrap-datetimepicker')
    );
  } else if (jQuery) {
    // Otherwise simply initialise as normal, stopping multiple evaluation
    factory(jQuery, jQuery.fn.dataTable.ColumnFilter);
  }
})(window, document);
