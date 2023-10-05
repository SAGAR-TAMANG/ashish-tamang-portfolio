function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const termsChecked = document.getElementById('terms').checked;

  // Validate or process the input as needed
  // For now, let's just log the values to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);
  console.log('Terms Checked:', termsChecked);
}

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

var currentFileName = window.location.pathname.split('/').pop();

// Check if the file name is "example.html"
if (currentFileName === "index.html") {
  nav_btn.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

} else {
  
}
