
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

          // Widget needs to be inside a relative positioned element
          th.css('position', 'relative');

          var picker = $('<input>', {type: self.options.type || 'text'});

          $.each(self.options.attr, function(key, value) {
            picker.attr(key, value);
          });

          self.startPicker = picker.clone().attr('placeholder', 'start');
          self.endPicker = picker.clone().attr('placeholder', 'end');

          var pickerOptions = {
            format: 'YYYY-MM-DD',
            showClear: true,
            showTodayButton: true,
            useCurrent: false
          };

          self.elements = self.startPicker.datetimepicker(pickerOptions)
            .add(self.endPicker.datetimepicker(pickerOptions))
            .appendTo(th);

          return self.elements;
        },
        bindEvents: function() {
          var self = this;

          self.startPicker.on('dp.change', function() {
            self.search();
          });
          self.endPicker.on('dp.change', function() {
            self.search();
          });
        },
        request: function() {
          var self = this;

          return [self.startPicker.val(), self.endPicker.val()]
            .join(self.options.separator);
        },
      }
    );
  };

  // Define as an AMD module if possible
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'datatables-columnfilter', 'eonasdan-bootstrap-datetimepicker'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'), require('datatables-columnfilter'), require('eonasdan-bootstrap-datetimepicker'));
  } else if (jQuery) {
    // Otherwise simply initialise as normal, stopping multiple evaluation
    factory(jQuery, jQuery.fn.dataTable.ColumnFilter);
  }

})(window, document);
