export function getDefaultState() {
  return {
    defaultConfig: {
      "num_colors": 6,
      "num_slots": 4, 
      "max_guesses": 5
    },
    game: null,
    row: 0,
    listColors: null,
    guessRowColors: [],
    code: [],
    currentColor: null,
    currentGuess: null,
    loaded: false
  }
}