const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'Python', 'MySQL', 'WordPress',
    'Bootstrap', 'Data Structures', 'Alogrithims'

];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ["#c5dcf0"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

