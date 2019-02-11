function kaprekar(num) {
  //num is four digits
  // 1. Take any four - digit number(at least two different digits must be used, zeroes allowed).
  // 2. Arrange the digits in descending and then in ascending order to get two four - digit numbers.
  // 3. Subtract the smaller number from the larger and get the result.
  // 4. Repeat steps 2 - 4 with the new number.
  let result = 0
  let low = num.toString().split('').sort()
  debugger
  let hi = low.reverse()


  debugger
  return result
}

// kaprekar(4321)

// tic-tac-toe checker
function tictaccheck(game) {

  function isRowWinner(a) {
    let first = a[0]
    if (first == '-') {
      return false
    }
    return a.every(e => e == first)
  }
  for (let i = 0; i < game.length; i++) {
    if (isRowWinner(game[i])) {
      return "there's a winner"
    }
  }
  let cols = {}
  game.forEach(a => {
    a.forEach((e, i) => {
      if (!cols[i]) {
        cols[i] = []
      }
      cols[i].push(e)
    })
  })
  for (let key in cols) {
    if (isRowWinner(cols[key])) {
      return "there's a winner in cols"
    }
  }
}
let row1 = ['x', 'o', '-']
let row2 = ['x', 'o', '-']
let row3 = ['x', '-', '-']

tictaccheck([row1, row2, row3])