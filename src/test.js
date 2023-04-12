function createDreamTeam(arr) {
    let name = new Array()
  
    if  (typeof arr === 'object' && arr !== null && arguments.length>0 ) {
      arr.forEach(el => {
        if (typeof el === 'string') {
          el = el.trim()
          name.push(el[0].toUpperCase())
        }
      })
    }
  
    if (name.length) {
      return name.sort().join('')}
    return name.length>0
}
  

  console.log(createDreamTeam())