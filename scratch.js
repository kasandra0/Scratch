
function bunnies(num) {
  let ears = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 == 0) {
      ears++
    }
  }
  return ears;
}

function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result;
}

function fizzbuzz(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    let result = ''
    if (curr % 3 == 0) {
      console.log('fizz')
      result += 'fizz'
    }
    if (curr % 5 == 0) {
      result += 'buzz'
    }
    return result;
  }
}