const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const func = (str) => {
    let obj = new Object()
    for (let i=0; i<str.length; i++){
      if (!Object.keys(obj).includes(str[i])) {
        obj[str[i]] = 1
      }
      else {
        obj[str[i]]++
      }
    }
    return obj
  }

  let a = func(s1)
  let b = func(s2)

  let counter = 0

  Object.entries(a).forEach(el => {
    Object.entries(b).forEach(elem=>{
        if (el[0] === elem[0]){
          counter += Math.min(el[1],elem[1])
        }
    })

  })
  return counter

}


module.exports = {
  getCommonCharacterCount
};
