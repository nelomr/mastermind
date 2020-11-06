export function getDefaultState() {
  return {
    defaultConfig: {
      'num_colors': 6,
      'num_slots': 4, 
      'max_guesses': 5
    },
    game: null,
    row: null,
    listColors: null,
    guessRowColors: [],
    code: [],
    currentRowPegs: [],
    rowsPegs: [],
    currentColor: null,
    loaded: false,
    pegsColorOption: {
      'default': 'lightgray',
      'exact': 'black',
      'partial': 'white'
    },
    status: null
  }
}