const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
      throw Error ("'arr' parameter must be an instance of the Array!");
    }

    const res = new Array;
    for (let n = 0; n < arr.length; n += 1) {
      switch (arr[n]) {
        case '--discard-prev':
        if (arr[n - 2] !== '--discard-next') {
            res.pop();
        }
        break;
        case '--discard-next':
          n += 1;
          break;
        case '--double-prev': 
        if (arr[n - 2] !== '--discard-next' && arr[n - 1] !== undefined) {
            res.push(arr[n - 1]);
        }
        break;
        case '--double-next': 
          if (arr[n + 1] !== undefined) {
            res.push(arr[n + 1]);
          }
          break;
        default:
            res.push(arr[n]);
      }
    }
    return res;
  }

module.exports = {
  transform
};
