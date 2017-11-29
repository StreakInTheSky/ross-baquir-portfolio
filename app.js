var state = {
  openNav: false
}

var largeScreen = window.matchMedia("(min-width: 740px)");

var menuButton = document.getElementById('top-nav-bars')
var topNav = document.getElementById('top-nav')

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


if(largeScreen) {

} else {

}
