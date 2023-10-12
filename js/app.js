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

var btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", function(){
  toggleMenu();
});

function toggleMenu(){
  var nav = document.getElementById("nav");
  var slider = document.getElementsByClassName("slider");
  
  // if (nav.style.display === "block") {
  //   nav.style.display = "none";
  // } else {
  //   nav.style.display = "block";
  // }
    
  if (nav.style.width === "50%") {
    nav.style.width = "0%";
    // btnMenu.style.backgroundColor = "var(--text)";
    // btnMenu.style.color = "var(--bg)";
  } else {
    nav.style.width = "50%";
    // btnMenu.style.backgroundColor = "var(--bg)";
    // btnMenu.style.color = "var(--text)";  
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

nav_btn = document.querySelectorAll('#nav ul a')

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
  
};

// POP UP BEGINS

function showPopupPeople1() {
  document.getElementById('popup-people-1').style.display = 'block';
}

function closePopupPeople1() {
  document.getElementById('popup-people-1').style.display = 'none';
}

document.getElementById('popup-link-people-1').addEventListener('click', function(event) { 
  console.log("CLICKED");
});
