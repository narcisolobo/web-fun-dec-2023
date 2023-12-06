console.log(this);

function whatIsThis(element) {
  console.log(element);
}

function goodbye(element) {
  console.log(element);
  element.innerText = 'Goodbye';
  element.style.backgroundColor = 'green';
}

// object literal notation
let guitar = {
  color: 'blue',
  year: 1972,
};

// get and set values in an object
// 1. dot notation
// 2. bracket notation

console.log(guitar.color);
console.log(guitar['color']);

guitar.year = 1973;
console.log(guitar.year);

guitar['year'] = 1974;
console.log(guitar['year']);

function erase(element) {
  element.remove();
}

function alertWazzup() {
  alert('Wazzup!');
}
