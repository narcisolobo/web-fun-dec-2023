/**
 * Sigma
 * Implement a function ​sigma(num)​ that, given a number,
 * returns the sum of all positive integers from 1 up to
 * that number (inclusive).
 *
 * Examples:
 * ​sigma(3) = 6 (or 1 + 2 + 3);
 * sigma(5)​ = 15 (or 1 + 2 + 3 + 4 + 5).
 */

/**
 * Given a number, returns the sum of all positive integers
 * from 1 up to that number (inclusive).
 * @param {number} num
 * @returns {number}
 */
function sigma(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(sigma(3)); // 6 (or 1 + 2 + 3)
console.log(sigma(5)); // 15 (or 1 + 2 + 3 + 4 + 5)

/**
 * Factorial
 * Write a function ​factorial(num)​ that, given a
 * number, returns the product (multiplication)
 * of all positive integers from 1 up to that
 * number (inclusive).
 *
 * Examples:
 * ​factorial(3)​ = 6 (or 1 * 2 * 3);
 * factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5).
 */

/**
 * Returns the product of all positive integers
 * from 1 up to that number (inclusive).
 * @param {number} num
 * @returns {number}
 */
function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}

console.log(factorial(3));
console.log(factorial(5));
