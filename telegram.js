//Write a function that takes a string, then accepts a number and outputs an array of strings, where the output lines are never longer than the provided characters. Words may not be split, but you may assume that no single word is too long for a line. This problem is sometimes referred to the telegram problem because of the limited length of a telegram often around 70 characters, a modern twist would call it the tweet problem, limiting to 140.

var message = "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."



function telegram(str, num) {
  let result = []
  let words = str.split(' ')
  let currentLine = ''
  for (let i = 0; i < words.length; i++) {
    currentLine += ' ' + words[i]
    if (i >= words.length - 1 || (currentLine.length + words[i + 1].length) >= num) {
      result.push(currentLine.trim())
      currentLine = ''
    }
  }
  console.log(result)
  return result
}
telegram(message, 70)