const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})

function wrongGuessCount(word, guesses) {
  return guesses.filter(guess => word.indexOf(guess) < 0).length
}

console.log('test wrong guesses: ', wrongGuessCount('pkrthhn', ['e', 'd', 'x', 'o']))

function showGuess(word, guesses) {
  return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
}

console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')

function isWinner(word, guesses) {
    return showGuess(word, guesses).indexOf("_") === -1;
}

console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))

function next(word, guesses) {
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
    rl.question('next letter? ', answer => {
        console.log('player wrote:', answer)
        // do something with answer
        next(word, guesses.concat(answer))
    })
}

next("hello", [])