function logout(element) {
  element.innerText = 'LOG OUT';
}

function removeFromDOM(element) {
  element.remove();
}

let aloftLikes = document.querySelector('#aloft-likes');
// alternative approach
// let aloftLikes = document.getElementById('aloft-likes');
let purrLikes = document.querySelector('#purr-likes');
let cubicLikes = document.querySelector('#cubic-likes');
let transitLikes = document.querySelector('#transit-likes');

// long way
function increaseAloftLikes() {
  aloftLikes.innerText++;
}

function increasePurrLikes() {
  purrLikes.innerText++;
}

function increaseCubicLikes() {
  cubicLikes.innerText++;
}

function increaseTransitLikes() {
  transitLikes.innerText++;
}

// short way
function increaseLikes(id) {
  let element = document.querySelector(id);
  element.innerText++;
}

let logoText = document.querySelector('#logo-text');

function changeLogoText() {
  logoText.innerText = 'YOUR VINYL COUNTDOWN';
}

function changeLogoTextBack() {
  logoText.innerText = 'THE VINYL COUNTDOWN';
}
