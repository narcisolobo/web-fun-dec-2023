// How to swap variables

var fruit1 = 'apples';
var fruit2 = 'oranges';

fruit2 = fruit1;

console.log(fruit2 + ' and ' + fruit1);

// What do we expect to get back?

var fruit1 = 'apples';
var fruit2 = 'oranges';

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + ' and ' + fruit1);

// What do we get back this time?

// While Loops
let start = 1;
let end = 10;

while (start < end) {
  console.log('start: ' + start + ', end: ' + end);
  start++;
  end--;
}

/**
  Reversing an Array
  Write a function reverse(arr) to reverse an
  array in-place (do not create another array).
*/

function reverse(arr) {
  // your code here
}
