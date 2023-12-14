// The Math Library

// console.log(Math.PI);

// Other useful Math methods

// console.log(Math.floor(3.141592653589793));
// prediction: 3
// console.log(Math.ceil(3.141592653589793));
// prediction: 4
// console.log(Math.round(3.141592653589793));
// prediction: 3

// Math.random returns a pseudo-random
// decimal from 0 (inclusive) to 1 (exclusive)

// for (let i = 1; i <= 100; i++) {
//   console.log(Math.floor(Math.random() * 10));
// }

let lifesAnswers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

// PSEUDO CODE
// multiply Math.random() by the array length
// this returns a decimal between 0 and array length
// floor it!
// use that random number as an index

function magicEightBall() {
  let randomDecimalIdx = Math.random() * lifesAnswers.length;
  let randomIntegerIdx = Math.floor(randomDecimalIdx);
  return lifesAnswers[randomIntegerIdx];
}

console.log(magicEightBall());

// Your own time
// Build a function that simulates the rolling of a six-sided die
// Change the function to accept a whole number representing the amount of sides

function rollDie() {
  // your code here
}

function rollDie(num) {
  // your code here
}
