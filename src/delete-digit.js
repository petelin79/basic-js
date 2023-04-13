const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let max = -Math.abs(num)
  let arr = String(num).split('')
  arr.forEach((el,key) => {
    let t = arr.slice(0,key).concat(arr.slice(key+1,arr.length)).join('')
    t > max ? max = t : undefined
  })
  return Number(max)
}

module.exports = {
  deleteDigit
};
