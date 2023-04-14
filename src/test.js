
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const elementDepth = this.calculateDepth(arr[i]) + 1;
        depth = Math.max(depth, elementDepth);
      }
    }
    return depth;
  }
}

const depthCalc = new DepthCalculator();

// console.log( depthCalc.calculateDepth([1, 2, 3, 4, 5]))

console.log( depthCalc.calculateDepth([1, 2, 3, [1,[[[]]]], 4, 5, [1]]))

// console.log( depthCalc.calculateDepth([[[]]]) )