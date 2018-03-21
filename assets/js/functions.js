$(function() {
  smoothScroll(1000); // Don't run until document is ready.
}); 

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) { // Look in document href for anything with #.

    var target = $( $(this).attr('href') ); // Store the target i.e. #about

    if(target.length) { // If not blank
      event.preventDefault(); // Don'reload the browser.
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
}