$(function() {
  smoothScroll(1000); // Don't run until document is ready.
  projectSubMenu();
}); 

function projectSubMenu() {
  //TODO: these are redundant and can be optimized.
  $('.software-contents').on('click', function(e) {

    console.log(e);

    var html = '<button onclick="back()"><<</button><h1 class="project-title">' + 'Software' + '</h1><ul class="overlay-menu"><li>Web Applications</li><li>Mobile Applications</li><li>Hackathon Projects</li><li>Undergrad Projects</li></ul><span><ul class="submenu"></ul></span>';
    $('.details-overlay').html(html)

    $('.details-overlay').css('display', 'block');
    clickProjectMenuItem()
  })

  $('.art-contents').on('click', function(e) {

    console.log(e);

    var html = '<button onclick="back()"><<</button><h1 class="project-title">' + 'Art&Design' + '</h1><ul class="overlay-menu"><li>Wireframes</li><li>Posters/PR Media</li><li>Figure Drawings</li><li>Art Portfolio</li></ul><span><ul class="submenu"></ul></span>';
    $('.details-overlay').html(html)

    $('.details-overlay').css('display', 'block');
    clickProjectMenuItem()
  })

  $('.recreational-contents').on('click', function(e) {

    console.log(e);

    var html = '<button onclick="back()"><<</button><h1 class="project-title">' + 'Art&Design' + '</h1><ul class="overlay-menu"><li>Hardware/PC Builds</li><li>Security/Data Science</li><li>Twitch Streams</li><li>Raspberry Pi Projects</li><li>Programming Problems Notebook (Java)</li></ul><span><ul class="submenu"></ul></span>';
    $('.details-overlay').html(html)

    $('.details-overlay').css('display', 'block');
    clickProjectMenuItem()
  })
}

function back() {
  console.log("waht");
  $('.details-overlay').css('display', 'none');
}

function clickProjectMenuItem() {
  var projects = {
    "web applications": ["kibblecount", "preoperational planning", "sharklabs"],
    "mobile applications": ["queery", "ensenta business mobile"],
    "industry projects": ["ensenta business mobile", "admin portal"],
    "hackathon projects": ["handsfree input"],
    "undergrad projects": ["search engine", "NASA USLI: Computer Vision with Raspberry Pi", "CSU Chancellor's: Data Visualization with Highcharts"],
    "wireframes":["md to pdf", "pororift"],
    "posters/pr media":["beachhacks"],
    "figure drawings":["names"],
    "art portfolio":["fanart", "fashion"],
    "hardware/pc builds":["'Chronis': X-series with 1080TI"],
    "security&data science":["PicoCTF 2014"],
    "twitch streams":["League of Legends", "Creative: Digital Art", "Creative: Web Development"],
    "raspberry pi projects":["Gogs: Private Git Repository", "Web Host"],
    "programming problems notebook":["leetcode subject 1", "subject 2"]
  }

  $('.details-overlay').find('li').on('click', function(event) {
    var subProject = $(event.target).text().toLowerCase();
    console.log(projects[subProject]); //the submenu
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
    var html = projects[subProject].map(x => "<li>" + x + "</li>").reduce((acc, curVal) => acc + curVal);
    $('ul[class$="submenu"]').html(html)
  })
}

//Default functions
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

