const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(mtx) {
  let counter = 0

  function check (arr) {
    if (!arr) return 0
    arr.forEach(el => {
      if  (typeof el === 'object'){
        check(el)
      }
      else {
          if (el === '^^') counter++
      }
    })
  }
  check(mtx)
  return counter
}

module.exports = {
  countCats
};
