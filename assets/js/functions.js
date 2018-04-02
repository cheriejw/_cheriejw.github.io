$(function() {
  smoothScroll(1000); // Don't run until document is ready.
  sliderBelt();
  workLoad();
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

function sliderBelt () {
  $('.thumb-unit').click(function() { //jQuery: look for all the thumb-units, when somebody clicks on one, run function
    $('.project-belt').css('left', '-100%'); //modify css of .project-belt
    $('.project-container').show();
  }) 

  $('.project-return').click(function() {
    var video = $('#player').attr('src');
    $('#player').attr('src', '');
    $('#player').attr('src', video);
    $('.project-belt').css('left', '0%');
    $('.project-container').hide(200);
  })
}

function workLoad () {
  $.ajaxSetup ({ cache: true }); // Use if only a few and going back and fourth okay to cache.

  $('.thumb-unit').click(function() {
    var $this = $(this), // this represents the thing that you click.
        newFolder = $this.data('folder'),
        newTitle = $this.find('strong').text(), // Find variable in strong tag
        loader = '<div class="loader">Loading...</div>',
        newHTML = '/projects/' + newFolder + '.html';
    $('.project-load').html(loader).load(newHTML); // Inject loader, after loader there and new HTML ready will override spinner.
    $('.project-title').text(newTitle);
  })
}