/* Create an inline datepicker which leverages the
   jQuery UI datepicker 
*/
$.editable.addInputType('datepicker', {
  element: function(settings, original) {
      var input = $('<input />');

      var options = settings.dateoptions;
      
      input.datepicker(options);
      
      $(this).append(input);
      return (input);
  }
});