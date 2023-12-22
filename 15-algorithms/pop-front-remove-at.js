/**
 * PopFront
 * Given an array, ​remove and return the value ​at
 * the beginning of the array. Do this without using
 * any built-in array methods except ​pop()​.
 */

/**
 * Removes and returns the first number from a given
 * array of numbers.
 * @param {Array<number>} arr
 * @returns {number}
 */
function popFront(arr) {
  const popped = arr[0];

  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx + 1];
  }

  arr.pop();

  console.log(arr);
  return popped;
}

let nums1 = [1, 2, 3, 4, 5];
console.log(popFront(nums1));

/**
 * RemoveAt
 * Given an array and an index into the array, remove
 * and return the array value ​at that index. Do this
 * without using any built-in array methods except
 * ​pop()​. Think of ​popFront(arr)​ as equivalent to
 * ​removeAt(arr,0).​
 */

/**
 * Removes and returns the number at the given index from
 * the given array.
 * @param {Array<number>} arr
 * @param {number} idx
 * @returns {number}
 */
function removeAt(arr, idx) {
  const popped = arr[idx];

  for (let i = idx; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.pop();

  console.log(arr);
  return popped;
}

let nums2 = [2, 3, 4, 5, 6];
console.log(removeAt(nums2, 2));
