
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
    if (typeof pos === 'number' && pos>this.arr.length) {
      this.arr.splice(pos-1, 1);
    }
    else{
      this.arr = []
      throw new Error("You can't remove incorrect link!")
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

console.log(chainMaker.addLink(3));
console.log(chainMaker.getLength());