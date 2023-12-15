// How to swap variables

var glass1 = 'orange juice';
var glass2 = 'lemonade';

glass2 = glass1;

console.log(glass2 + ' and ' + glass1);

// What do we expect to get back?

var glass1 = 'apple juice';
var glass2 = 'lemonade';

var temp = glass1; // temp is a common name for this
glass1 = glass2;
glass2 = temp;

console.log(glass2 + ' and ' + glass1);

// What do we get back this time?

// While Loops
let start = 1;
let end = 10;

while (start < end) {
  console.log('start: ' + start + ', end: ' + end);
  start++;
  end--;
}

// prediction:
// start: 1, end: 10
// start: 2, end: 9
// start: 3, end: 8
// start: 4, end: 7
// start: 5, end: 6

/**
  Reversing an Array
  Write a function reverse(arr) to reverse an
  array in-place (do not create another array).
  Also, do not use any built-in array methods.
*/

function reverse(arr) {
  // your code here
}

let nums1 = [1, 2, 3, 4, 5]; // [5, 4, 3, 2, 1]
let nums2 = [1]; // [1]
let nums3 = []; // []

reverse(nums1);
reverse(nums2);
reverse(nums3);

// Must mutate the original array. Do not create a new array.

console.log(Math.floor(Math.random() * 5 + 1));
