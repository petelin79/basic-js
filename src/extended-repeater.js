const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {

  let repeatTimes = options.repeatTimes || 1
  let separator = options.separator || '+'
  let addition
  if (options.addition !== undefined) {
    addition = String(options.addition)
  } else {
    addition = ''
  }
  let additionRepeatTimes = options.additionRepeatTimes || 1
  let additionSeparator = options.additionSeparator || '|'

  let repeatedAddition = addition + additionSeparator
  repeatedAddition = repeatedAddition.repeat(additionRepeatTimes - 1) + addition

  let repeatedString = str + repeatedAddition + separator
  repeatedString = repeatedString.repeat(repeatTimes - 1) + str + repeatedAddition

  return repeatedString
}

module.exports = {
  repeater
};
