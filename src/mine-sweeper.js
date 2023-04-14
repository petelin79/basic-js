const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(mtx) {
  const rows = mtx.length
  const cols = mtx[0].length
  const res = []
  
  for (let i = 0; i < rows; i++) {
    res.push(new Array(cols).fill(0))
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mtx[i][j]) {
        for (let k = i-1; k <= i+1; k++) {
          for (let l = j-1; l <= j+1; l++) {
            if (k >= 0 && k < rows && l >= 0 && l < cols && !(k === i && l === j)) {
              res[k][l]++
            }
          }
        }
      }
    }
  }
  
  return res
}

module.exports = {
  minesweeper
};
