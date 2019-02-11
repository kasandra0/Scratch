//[1,6,7,13,1,13] returns [6,7]
function removeDups(arr) {
  let result = []
  let dict = {}
  arr.forEach(num => {
    if (!dict[num]) {
      dict[num] = 1
    } else {
      dict[num] += 1
    }
  })
  for (let num in dict) {
    if (dict[num] > 1) {
      
    }
  }
  console.log(dict)

  return result
}
removeDups([1, 6, 7, 13, 1, 13])