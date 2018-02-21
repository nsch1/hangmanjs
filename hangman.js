function wrongGuessCount(word, guesses) {
  return guesses.filter(guess => word.indexOf(guess) < 0).length
}

console.log('test wrong guesses: ', wrongGuessCount('pkrthhn', ['e', 'd', 'x', 'o']))