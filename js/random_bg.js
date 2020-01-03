function randomImage() {
  var images = [
    "img/svg/Bullseye-Gradient.svg",
    "img/svg/Cornered-Stairs.svg",
    "img/svg/Endless-Constellation.svg",
    "img/svg/Wavey-Fingerprint.svg",
    "img/svg/1.svg",
    "img/svg/2.svg",
    "img/svg/3.svg",
    "img/svg/4.svg",
    "img/svg/5.svg",
    "img/svg/6.svg",
    "img/svg/7.svg"
  ];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element1 = document.getElementById("randombg");
  var element2 = document.getElementById("parallax-bg");
  console.log(element1);
  console.log(element2);
  element1.setAttribute("style", "background-image: url(" + images[x] + ");");
}

document.addEventListener("DOMContentLoaded", randomImage);
