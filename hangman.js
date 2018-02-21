const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})
const randomWord = require('random-words')

function wrongGuessCount(word, guesses) {
  return guesses.filter(guess => word.indexOf(guess) < 0).length
}

function showGuess(word, guesses) {
  return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
}

function isWinner(word, guesses) {
    return showGuess(word, guesses).indexOf("_") === -1;
}

function next(word, guesses) {
    Object.freeze(guesses)
    console.clear()
    console.log(showGuess(word, guesses))
    // check if lost
    if (wrongGuessCount(word, guesses) >= 6) {
      console.log("You lost...")
      console.log(`The word was: ${word}`)
      rl.close()
      return
    } 
    // check if won
    if (isWinner(word, guesses)) {
      console.log("You win!")
      rl.close()
      return
    }
    // ask for the next letter
    console.log(`Previous guesses: ${guesses.join(', ')}.`)
    console.log(`Wrong guesses: ${wrongGuessCount(word, guesses)}`)
    rl.question('next letter? ', answer => {
        console.log(`Previous guesses: ${guesses.concat(answer).join(', ')}.`)
        // do something with answer
        next(word, (answer === '') ? guesses : guesses.concat(answer))
    })
}

next(randomWord(), [])