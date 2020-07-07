// $(document).ready(function() {
//     $('#answers').click(function() {
//         $('.answer').fadeToggle();
//     });
// });

// - - - - - - - - - - -  - - - - - - - - - - -  Modal brainteasers button popovers //

$(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })