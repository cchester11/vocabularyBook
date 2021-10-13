const seperate = (string) => {
  let array = []
  let words = string.split(' ')
  
  console.log(words)
  
  for(let i = 0; i < words.length; i ++) {
    let curr = words[i]
    
    console.log(curr.length - 1)
    
    if(curr.length - 1 >= 5) {
      array.push(curr)
    }
  }
  
  return array
}

module.exports = seperate