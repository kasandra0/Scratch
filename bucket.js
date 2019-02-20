/*You are filling a bucket with water that holds n CSSSupportsRule. You can use a 1cup measuring cup or a 2cup measuring cup as you fill the bucket.
Calculate How many distinct ways you can use the measuring cups to fill the Bucket.
Constraints:
INPUT - integer n where 1<= N <=50
OUTPUT - 32-bit integer
Examples:
For n=1, fillTheBucket(n) =1
For n=2, fillTheBucket(n) =2, You can either use the 2cup measuring cup once, or use the 1cup measuring cup twice
For n=3, fillTheBucket(n) =3, 
#1 2cup then 1cup
#2 1cup then 2cup
#3 1cup 3 times
*/
// How many different ways can I add 1's and 2's to to equal n
function fillBucket(n) {
  let result = 1; // all ones
  let twos = Math.floor(n / 2);
  let ones = n % 2;
  if (twos >= 1) { // if n >= 2
    if (ones == 1) { // n is odd
      let permutations = factorial(ones + twos) / (factorial(ones) * factorial(twos))
      result += permutations;
    }
    else { //n is even
      result++ // the only permuation is all twos
    }
    // split each two into 2 ones
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

/* You have a set of balances for an account over a number of days.Given this set of balances, find the maximum possible sum of consectutive balances in the set
Example:
For accountBalances = [-2,2,5,-11,6], The output should be
  maximumBalances(accountBalances)=7
  The consecutive set of balances that gives the maxium possible sum is [2,5] with sum =7
*/

function maxBalances(balances) {
  let max = balances[0] + balances[1]
  for (let i = 1; i < balances.length - 2; i++) {
    let sum = balances[i] + balances[i + 1]
    if (sum > max) {
      max = sum
    }
  }
  return max
}
let arr = [-2, 2, 5, -11, 6];
console.log(maxBalances(arr))