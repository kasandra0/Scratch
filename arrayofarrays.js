//Write a function that will loop over an array and group all similar values in sub arrays

//example [1,1,3,4,5,4]
// output [[1,1],[3],[4,4],[5]]

//(HINT: USE AN OBJECT)


var data = [111, 1, 1, 2, 2, 2, 2, 4, 3, 3, 4, 5, 6, 7, 8, 3, 7, 8, 5, 3, 677, 3, 345, 4, 56, 2, 3, 6, 345, 5]

function sortSubs(arr) {
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = []
    }
    result[arr[i]].push(arr[i])
  }
  return Object.values(result)
}

console.log(sortSubs(data))

