/**
 * Generate Coin Change
 * Implement ​generateCoinChange(cents)​ that accepts
 * a parameter for the number of cents, and computes
 * how to represent that amount with the fewest
 * number of coins. Return the result in the form of
 * an object with the following properties/keys: quarters,
 * dimes, nickels, pennies.
 */

/**
 * @typedef {Object} Change
 * @property {number} quarters
 * @property {number} dimes
 * @property {number} nickels
 * @property {number} pennies
 */

/**
 * Given an amount of cents, returns an object
 * representing that amount in the fewest number of
 * coins.
 * @param {number} cents
 * @returns {Change}
 */
function generateCoinChange(cents) {
  const change = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  change.quarters = Math.floor(cents / 25);
  cents -= change.quarters * 25;

  change.dimes = Math.floor(cents / 10);
  cents -= change.dimes * 10;

  change.nickels = Math.floor(cents / 5);
  cents -= change.nickels * 5;

  change.pennies = cents;

  return change;
}

console.log(generateCoinChange(94));
