var goodValues = [1, 2, 3, 3, 4, 10]
var evilValues = [1, 2, 2, 2, 3, 5, 10]


function goodVsEvil(goodTeam, evilTeam) {
  let result = 'Battle Result: '

  let goodCount = goodTeam.split(' ')
  let evilCount = evilTeam.split(' ')
  let goodWorth = 0
  for (let i = 0; i < goodCount.length; i++) {
    goodWorth += goodCount[i] * goodValues[i]
  }
  let evilWorth = 0
  for (let i = 0; i < evilCount.length; i++) {
    evilWorth += evilCount[i] * evilValues[i]
  }
  if (goodWorth == evilWorth) {
    result += 'No victor on this battle field'
  } else if (goodWorth > evilWorth) {
    result += 'Good triumphs over Evil'
  } else {
    result += 'Evil eradicates all trace of Good'
  }
  return `${result}`
}



// #### On the Good Side:

//  Hobbits - 1, Men - 2,Elves - 3, Dwarves - 3, Eagles - 4, Wizards - 10

// On the side of evil we have:
// Orcs - 1, Men - 2, Wargs - 2, Goblins - 2, Uruk Hai - 3, Trolls - 5, Wizards - 10