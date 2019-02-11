function largestProduct(intArr) {
  let product = intArr[0] * intArr[1]

  for (let i = 1; i < intArr.length - 1; i++) {
    if (product < intArr[i] * intArr[i + 1]) {
      product = intArr[i] * intArr[i + 1]
      console.log('index: ', i, product)
    }
  }
  return product
}

let randArray = []
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 2000) - 1000
  randArray.push(num)
}
console.log(randArray)
console.log(largestProduct(randArray))
