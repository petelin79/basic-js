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




console.log( getCommonCharacterCount('aabcc', 'adcaa'))