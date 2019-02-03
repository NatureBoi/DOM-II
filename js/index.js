// Your code goes here
let images = [...document.getElementsByTagName("img")];
let body = document.querySelector("body");
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

//Changes the background color of the nav Pressing keys 1-0
window.addEventListener("keydown", function(e) {
  console.log(e.key)
  nav.style['background-color'] = `${colors[e.key]}`
});

// Select the Fun Bus Logo Element
let logo = document.querySelector(".logo-heading");

//Disable user's ability to select/highlight Fun Bus Logo Element Double CLicking changes the color of the Logo
//To the random colors listed in the Array
logo.style["user-select"] = "none";
logo.addEventListener("dblclick", function(e) {
  logo.style.color = `${randomColor(colors)}`;
  e.stopPropagation();
});

// Function to select a random color from the colors array
function randomColor(el) {
  let rn = Math.floor(Math.random() * el.length);
  return el[rn];
}

// Load event which alerts the h2 heading selected by the querySelector
let heading = document.querySelector("h2").textContent;
window.addEventListener("load", function(event) {
  alert(`${heading}\n 
    Press Keys 1-0 to change the Color of the Nav. \n
    Double click the Fun Bus Logo to change the color. \n
    Hover over the images to see an effect. \n
    Click the buttons to see them move. \n
    Double click the page to see colors. \n
    Keep scrolling to change the color of the Background. \n
    Highlight a Paragrah text and see the value in the console. \n
  `);
});


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
    button.classList.toggle("heartbeat");
  })
);

//Prevent the Links from Refreshing the page
[...document.querySelectorAll(".nav-link")].forEach(nav_item =>
  nav_item.addEventListener("click", e => e.preventDefault())
);

// Select the Text content of What you highlight
let allP = [...document.getElementsByTagName('p')];

allP.forEach(p => {
    p.addEventListener('mouseup', function(e){
        alert(e.target.textContent)
    })
})

// Keep Scrolling to change the Background color 
function scrollCounter(){
  let counter = 0;
  window.addEventListener('wheel', function(e){
    (e.deltaY === 100)? counter++ : counter--
    body.style["background-color"] = `rgb( 240,
      ${counter}, ${counter-50}`;

      displayCounter(counter);
  })

}

let newScrollCounter = scrollCounter()


// Adds a scroll counter to the nav bar and the color of the BG changes
// The G and B values of the background are connected to the scroll counter
// Which decreases / increases on the direction of the scroll
let nav2 = document.querySelector('.nav')
let counterDisplay = document.createElement('p');
cdStyle = counterDisplay.style
cdStyle.width = '30px';
cdStyle.height = '30px';
cdStyle['background-color'] = 'white';
cdStyle['position'] = 'fixed';
cdStyle['right'] = '500px';
cdStyle['top'] = '10px';

nav2.prepend(counterDisplay)

function displayCounter(cn){
counterDisplay.innerHTML = `<h2>${cn}<h2/>`
}