// script.js
$(document).ready(function() {
    $('#contactUsBtn').on('click', function() {
      $('#contactUsModal').modal('show');
    });
  
    $('#contactForm').on('submit', function(event) {
      event.preventDefault();
      // Collect form data
      const email = $('#email').val();
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();
      const termsAccepted = $('#termsCheck').is(':checked');
  
      if (email && firstName && lastName && termsAccepted) {
        alert('Form submitted successfully!');
        // Here you can handle form submission, e.g., send data to a server
        $('#contactUsModal').modal('hide');
      } else {
        alert('Please fill in all fields and accept the terms and conditions.');
      }
    });
  });
  // script.js
// script.js
// script.js
$(document).ready(function() {
  $('.slider-img').hover(function() {
    var hoverImg = $(this).data('hover');
    $(this).attr('src', hoverImg);
  }, function() {
    var originalImg = $(this).attr('src').replace('hover-', '');
    $(this).attr('src', originalImg);
  });
});
