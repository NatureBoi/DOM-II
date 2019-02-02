// Your code goes here

let images = [...document.getElementsByTagName('img')];
images.forEach(image => {
    image.addEventListener('mouseover', function(){
        image.style.border = "5px solid #17A2B8";
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'all 0.5s ease-out';
    })

    image.addEventListener('mouseleave', function(){
        image.style.border = "";
        image.style.transform = 'scale(1)'
    })


})

let heading = document.querySelector('h2').textContent.split('');
window.addEventListener('keydown', function(e){
    let rx = new RegExp(e, 'gi');
    console.log(heading)
})