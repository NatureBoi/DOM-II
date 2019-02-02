// Your code goes here
let images = [...document.getElementsByTagName("img")];
let body = document.querySelector("body");

// Event adds a scale animation and border to all the img tags
images.forEach(image => {
  image.addEventListener("mouseover", function() {
    image.style.border = "5px solid #17A2B8";
    image.style.transform = "scale(1.1)";
    image.style.transition = "all 0.5s ease-out";
  });

  image.addEventListener("mouseleave", () => {
    image.style.border = "";
    image.style.transform = "scale(1)";
  });
});

let heading = document.querySelector("h2").textContent.split("");
window.addEventListener("keydown", function(e) {
  let rx = new RegExp(e, "gi");
  console.log(heading);
});

// Select the Fun Bus Logo Element
let logo = document.querySelector(".logo-heading");

//Disable user's ability to select/highlight Fun Bus Logo Element Double CLicking changes the color of the Logo
//To the random colors listed in the Array
logo.style["user-select"] = "none";
logo.addEventListener("dblclick", function(e) {
  logo.style.color = `${randomColor()}`;
  e.stopPropagation();
});

// Function to select a random color from the colors array
function randomColor() {
  let colors = [
    "#EC6447",
    "#F69D25",
    "#F6EF25",
    "#BAF625",
    "#25F6BC",
    "#25D2F6",
    "#2925F6",
    "#AE25F6",
    "#F086E4",
    "#9F355C"
  ];
  let rn = Math.floor(Math.random() * colors.length);
  return colors[rn];
}

// Load event which alerts the h2 heading selected by the querySelector
window.addEventListener("load", function(event) {
  alert(`${heading}`);
});

// window.addEventListener("scroll", function(e) {
//   window.scrollY;
//   body.style["background-color"] = `rgb( 140,
//     ${Math.floor(window.scrollY)}, 130`;
// });

//Double click event to add animations to all h2 and h4 headers
body.addEventListener("dblclick", () => {
  let h2 = [...document.querySelectorAll("h2")];
  let h4 = [...document.querySelectorAll("h4")];

  h2.forEach(el => {
    el.classList.toggle("shift");
    el.style.fontSize = "5rem";
  });
  h4.forEach(el => el.classList.toggle("shift"));
});

//On Window Scroll make the nav smaller and add opacity to it.
let nav = document.querySelector(".main-navigation");
let stick = nav.offsetTop + 30;
console.log(nav.offsetTop);

window.onscroll = () => myFunction();

function myFunction() {
  if (window.pageYOffset > stick) {
    nav.style.height = "40px";
    nav.style.opacity = ".5";
  } else {
    nav.style.height = "";
    nav.style.opacity = "";
  }
}

//Adds and animation when you click each button
let buttons = [...document.querySelectorAll(".btn")];
buttons.forEach(button =>
  button.addEventListener("click", () => {
    button.classList.add("heartbeat");
  })
);

//Prevent the Links from Refreshing the page
[...document.querySelectorAll(".nav-link")].forEach(nav_item =>
  nav_item.addEventListener("click", e => e.preventDefault())
);
