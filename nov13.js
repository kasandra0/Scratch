//Write a function that will determine the most common word in the following cat journal entry


let catLog = "I cry and cry and cry unless you pet me, and then maybe i cry just for fun eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap purr paw at your fat belly if human is on laptop sit on the keyboard all of a sudden cat goes crazy. Brown cats with pink ears jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed lick the plastic bag and intently stare at the same spot, so hack up furballs this cat happen now, it was too purrfect refuse to leave cardboard box. Man running from cops stops to pet cats, goes to jail warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats loved it, hated it, loved it, hated it hack up furballs sleep nap where is my slave I'm getting hungry. Lick the curtain just to be annoying then cats take over the world. Sniff other cat's butt and hang jaw half open thereafter spend all night ensuring people don't sleep sleep all day lick the plastic bag or pose purrfectly to show my beauty meowing non stop for food. Attack the dog then pretend like nothing happened sit on the laptop lie on your belly and purr when you are asleep. Hide when guests come over pose purrfectly to show my beauty soft kitty warm kitty little ball of furr. Sniff all the things pounce on unsuspecting person. If it fits, i sits. A nice warm laptop for me to sit on cough meow loudly just to annoy owners cats are fats i like to pets them they like to meow back but sleep on my human's head. I could pee on this if i had the energy sleep in the bathroom sink yet mice for jump five feet high and sideways when a shadow moves. Scratch me there, elevator butt friends are not food or instantly break out into full speed gallop across the house for no reason, fall over dead not really but gets sypathy lies down curl into a furry donut. Love to play with owner's hair tie. Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat unwrap toilet paper but gnaw the corn cob. Pee in the shoe. Mew i like big cats and i can not lie all of a sudden cat goes crazy, yet peer out window, chatter at birds, lure them to mouth. Spend six hours per day washing, but still have a crusty annoy kitten brother with poking more napping, more napping all the napping is exhausting, but pushes butt to face. Leave hair everywhere. Chew foot demand to be let outside at once, and expect owner to wait for me as i think about it run in circles.=="


function mostCommonWord(str) {
  let temp = str.replace(/,/gi, "")
  return temp
}

function isaPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
      return false
    }
  }
  return true
}

function letterCount(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++
    }
  }
  return count
}
function minesweeperNumbers(board) {
  for (let j = 0; board.length; j++) {
    for (let k = 0; board[j].length; k++) {
      console.log(board[j].length)
      return board.length
    }
  }
}
const board1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
];
minesweeperNumbers(board1)