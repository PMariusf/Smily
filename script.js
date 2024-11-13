// JavaScript to toggle through animations
function startSmileyAnimation() {
  const smiley = document.querySelector('.smiley');
  
  // Set initial state to happy
  smiley.classList.add('happy');
  
  // Cycle through different states
  setInterval(() => {
    if (smiley.classList.contains('happy')) {
      smiley.classList.remove('happy');
      smiley.classList.add('normal');
    } else if (smiley.classList.contains('normal')) {
      smiley.classList.remove('normal');
      smiley.classList.add('angry');
    } else {
      smiley.classList.remove('angry');
      smiley.classList.add('happy');
    }
  }, 6000); // Adjust interval time as needed
}

// Run animation on page load
window.onload = startSmileyAnimation;

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});