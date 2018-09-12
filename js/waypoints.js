document.getElementById('aboutMeImage').style.opacity = 0;
var waypoint = new Waypoint({
  element: document.getElementById('aboutMeImage'),
  handler: function() {
    document.getElementById('aboutMeImage').classList.add('fadeInLeft');
  },
  offset: 500
});

document.getElementById('mainBlurb').style.opacity = 0;
var waypoint = new Waypoint({
  element: document.getElementById('mainBlurb'),
  handler: function() {
    document.getElementById('mainBlurb').classList.add('fadeInRight');
  },
  offset: 500
});

document.getElementById('devCard').style.opacity = 0;
var waypoint = new Waypoint({
  element: document.getElementById('devCard'),
  handler: function() {
    document.getElementById('devCard').classList.add('fadeIn');
  },
  offset: 500
});

document.getElementById('nerdCard').style.opacity = 0;
var waypoint = new Waypoint({
  element: document.getElementById('nerdCard'),
  handler: function() {
    document.getElementById('nerdCard').classList.add('fadeIn');
  },
  offset: 500
});

document.getElementById('foodieCard').style.opacity = 0;
var waypoint = new Waypoint({
  element: document.getElementById('foodieCard'),
  handler: function() {
    document.getElementById('foodieCard').classList.add('fadeIn');
  },
  offset: 500
});

// document.getElementById('projectImage').style.opacity = 0;
var waypoint = new Waypoint({
  element: document.getElementById('projectImage'),
  handler: function() {
    document.getElementById('projectImage').classList.add('slideInLeft');
  },
  offset: 500
});

var waypoint = new Waypoint({
  element: document.getElementById('projectDescription'),
  handler: function() {
    document
      .getElementById('projectDescription')
      .classList.add('<slideInRight></slideInRight>');
  },
  offset: 500
});
