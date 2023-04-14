const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: new Array(),

  getLength() {
   return this.arr.length
  },

  addLink(value) {
    if (value !== undefined) {
      this.arr.push(`( ${value} )`)
    }
    else {
      this.arr.push(`( )`)
    }
    return this
  },
  removeLink(pos) {
    if (typeof pos !== 'number' || pos>this.arr.length || pos<1) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }
    else{
      this.arr.splice(pos-1, 1);
     
    }
    return this
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
