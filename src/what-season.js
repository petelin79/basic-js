const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    if (!date) {
        return 'Unable to determine the time of year!';
    }
    if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date)) {
      throw new Error('Invalid date!')
    }
    let month = date.getMonth();
  
    if (month > 1 && month <= 4) {
        return 'spring'
    }
    else if (month > 4 && month <= 7) {
        return 'summer'
    }
    else if (month > 7 && month <= 10) {
        return 'autumn'
    }
    else {
        return 'winter'
  }
  }
  
  catch {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
