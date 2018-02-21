function wrongGuessCount(word, guesses) {
  //return guesses.filter(guess => word.indexOf(guess) < 0).length

  let wrongGuesses = guesses.filter(function(guess) {
    return word.indexOf(guess) === -1;
  });

  return wrongGuesses.length
  
}

console.log('test wrong guesses: ', wrongGuessCount('pkrthhn', ['e', 'd', 'x', 'o']))