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
    document.getElementById('projectDescription').classList.add('slideInRight');
  },
  offset: 500
});
/////////// Contact cards /////////////

// github card
// document.getElementById('github').style.opacity = 0;
// var waypoint = new Waypoint({
//   element: document.getElementById('github'),
//   handler: function() {
//     document.getElementById('github').classList.add('fadeIn');
//   },
//   offset: 100
// });

// linkedin card
// document.getElementById('linkedin').style.opacity = 0;
// var waypoint = new Waypoint({
//   element: document.getElementById('linkedin'),
//   handler: function() {
//     document.getElementById('linkedin').classList.add('fadeInRightBig');
//   },
//   offset: 500
// });
// twitch card
// document.getElementById('twitch').style.opacity = 0;
// var waypoint = new Waypoint({
//   element: document.getElementById('twitch'),
//   handler: function() {
//     document.getElementById('twitch').classList.add('fadeInRight');
//   },
//   offset: 500
// });
// twitter card
// document.getElementById('twitter').style.opacity = 0;
// var waypoint = new Waypoint({
//   element: document.getElementById('twitter'),
//   handler: function() {
//     document.getElementById('twitter').classList.add('fadeInLeft');
//   },
//   offset: 500
// });
