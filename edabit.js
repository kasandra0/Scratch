//
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach(num => {
    if (num < min) {
      min = num
    }
    if (num > max) {
      max = num
    }
  })
  return [min, max]
}
function minMax2(arr) {
  arr.sort(function (a, b) { return a - b })
  return [arr[0], arr[arr.length - 1]]
}
//Shuffle the Name
function nameShuffle(str) {
  let arr = str.split(" ")
  return `${arr[1]} ${arr[0]}`
}