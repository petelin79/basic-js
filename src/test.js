function deleteDigit(num) {
  let max = -Math.abs(num)
  let arr = String(num).split('')
  arr.forEach((el,key) => {
    let t = arr.slice(0,key).concat(arr.slice(key+1,arr.length)).join('')
    t > max ? max = t : undefined
  })
  return max
}

console.log( deleteDigit(342))