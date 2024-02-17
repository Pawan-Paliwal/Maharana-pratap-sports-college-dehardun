function myfunct() {
  var navbar = document.getElementById("nav");
  navbar.classList.toggle("show");
}

//slider image show
let image = document.getElementById("img-crousel");
let images = [
  "../Images//slider/h1.png",
  "../Images//slider/h2.png",
  "../Images//slider/h3.png",
  "../Images//slider/h4.jpg",
  "../Images//slider/h5.png",
  "../Images//slider/h6.jpg",
  "../Images//slider/h7.jpg",
  "../Images//slider/h8.jpg",
];

setInterval(function() {
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}, 2000);