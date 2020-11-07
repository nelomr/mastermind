export default function(data) {
  let game = {};
  game.guesses = [];
  game.colors = [];
  game.secretCode = [];

  game.id = data.id;
  game.reference = data.reference;
  game.status = data.status;
  game.maxGueses = data.max_guesses;
  game.numColors = data.num_colors;
  game.numSlots = data.num_slots;

  data.colors.forEach(colorData => {
    game.colors.push(colorData);
  });

  data.secret_code.forEach(secretData => {
    game.secretCode.push(secretData);
  });

  data.guesses.forEach(guessData => {
    let guessObject = {};
    guessObject.code = [];
    guessObject.blackPegs = guessData.black_pegs;
    guessObject.whitePegs = guessData.white_pegs;

    guessData.code.forEach(codeData => {
      guessObject.code.push(codeData);
    })

    game.guesses.push(guessObject);
  });

  return game;
}
