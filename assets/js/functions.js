$(function() {
  smoothScroll(1000); // Don't run until document is ready.
  sliderBelt();
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

function sliderBelt() {
  $('.thumb-unit').click(function() { //jQuery: look for all the thumb-units, when somebody clicks on one, run function
    $('.project-belt').css('left', '-100%'); //modify css of .project-belt
    $('.project-container').show();
  }) 

  $('.project-return').click(function() {
    $('.project-belt').css('left', '0%');
    $('.project-container').hide(200);
  })
}