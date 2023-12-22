/**
 * Push Front
 * Given an array and a value, ​insert
 * the value ​at the beginning of the array. Do
 * this without using any built-in array methods.
 */

// JSDoc

/**
 * Inserts given number at beginning of array.
 * @param {Array<number>} arr
 * @param {number} num
 * @returns {Array<number>}
 */
function pushFront(arr, num) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = num;
  return arr;
}

let nums = [1, 2, 3];

console.log(pushFront(nums, 29)); // [29, 1, 2, 3]

/**
 * Insert At
 * Given an array, index, and a value, ​insert
 * the value into the array a​t the given index. Do
 * this without using built-in array methods. You can
 * think of ​pushFront(arr, val)​ as equivalent to
 * insertAt(arr, 0, val)​.
 */

/**
 * Inserts the given number at the given index in the
 * given array. Returns the new array.
 * @param {Array<number} arr
 * @param {number} idx
 * @param {number} num
 * @returns {Array<number>}
 */
function insertAt(arr, idx, num) {
  if (idx > arr.length - 1) {
    return false;
  }

  for (let i = arr.length - 1; i >= idx; i--) {
    arr[i + 1] = arr[i];
  }

  arr[idx] = num;
  return arr;
}

console.log(insertAt(nums, 2, 21)); // [1, 2, 21, 3]
