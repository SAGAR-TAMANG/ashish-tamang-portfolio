function toggleMenu(){
  var nav = document.getElementById("nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

var isButtonPressed = false;

function toggleTheme(){
  var theme = document.body;
  
  if (isButtonPressed) {
    console.log('pressed twice');
    if (theme.classList.contains('light'))
      theme.classList.replace('light', 'dark');
    else
      theme.classList.replace('dark', 'light');
  }
  else {
    console.log('Pressed once')
    isButtonPressed = true;
    setTimeout(function() {
      isButtonPressed = false;
    }, 10); // Adjust the time as needed
  }
}

var ashishIntroMiddle = document.getElementById("ashish-intro-middle");
var verticalLine = document.getElementById("vertical-line");

verticalLine.style.height = (ashishIntroMiddle.offsetHeight + 40) + 'px';

// Smooth Scrolling

nav_btn = document.querySelectorAll('ul a')

// btn1.addEventListener('click', function (e) {
//   e.preventDefault();

//   document.getElementById(this.getAttribute('data-target')).scrollIntoView({
//     behavior: 'smooth'
//   });
// });

nav_btn.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
