function wrongGuessCount(word, guesses) {
  return guesses.filter(guess => word.indexOf(guess) < 0).length
}

console.log('test wrong guesses: ', wrongGuessCount('pkrthhn', ['e', 'd', 'x', 'o']))

function showGuess(word, guesses) {
  return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
}

console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')