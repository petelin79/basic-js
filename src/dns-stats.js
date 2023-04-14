const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = []
  for (let i = 0; i<domains.length; i++) {
    let t = domains[i].split('.').reverse()
    t.forEach(elem => {
      elem = '.'+elem
    })
    t=t.map((el,key) => '.'+t.slice(0, key + 1).join('.'))
    arr.push(t)
  }
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(!obj[arr[i][j]]) obj[arr[i][j]] = 1;
      else obj[arr[i][j]]++
    }
  }
  return obj
}

module.exports = {
  getDNSStats
};
