var state = {
  openNav: false
}

var menuButton = document.getElementById('top-nav-bars')
var topNav = document.getElementById('top-nav')
var about = document.getElementById('about')
var projects = document.getElementById('projects')
var contact = document.getElementById('contact')

var projectsNav = document.getElementById('projects-nav')
var curatorRater = document.getElementById('curator-rater')
var openToolbox = document.getElementById('open-toolbox')
var pokemonGoogleMaps = document.getElementById('pokemon-google-maps')

function toggleBars() {
  var bars = document.getElementsByClassName('bar')
  for (var i=0; i < bars.length; i++) {
    if(bars[i].classList.contains('hide-bar')){
      bars[i].classList.remove('hide-bar')
      state.openNav = false;
    } else {
      bars[i].classList.add('hide-bar')
      state.openNav = true;
    }
  }
}

function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

menuButton.addEventListener('click', function(){
  toggleBars();
  topNav.classList.remove('hide-menu');
})

document.addEventListener('click', function(event){
  if(state.openNav && !menuButton.contains(event.target)) {
    topNav.classList.add('hide-menu');
    toggleBars()
  }
})
