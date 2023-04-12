function countCats(mtx) {
    let counter = 0
  
    function check (arr) {
      arr.forEach(el => {
        if  (typeof el === 'object'){
          check(el)
        }
        else {
            if (el === '^^') counter++
        }
      })
    }
    
    check(mtx)
    console.log(counter);
  }

  countCats([[0, 1, '^^'],[0, '^^', 2],  ['^^', 1, 2, [0, '^^', 2, [0, 1, '^^']]]]) 