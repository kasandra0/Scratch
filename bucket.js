// How many different ways can I add 1's and 2's to to get n
function fillBucket(n) {
  let result = 1; // all ones
  let twos = Math.floor(n / 2);
  let ones = n % 2;
  if (twos >= 1) {
    if (ones == 1) { // n is odd
      let permutations = factorial(ones + twos) / (factorial(ones) * factorial(twos))
      result += permutations;
    }
    else {
      result++ // all twos
    }
    while (twos > 1) {
      ones = ones + 2;
      twos--;
      let permutations = factorial(ones + twos) / (factorial(ones) * factorial(twos))
      result += permutations;
    }
  }
  return result
}
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1)
  }
}
console.log(fillBucket(6))