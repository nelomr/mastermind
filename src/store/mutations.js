export default {
  setGame(state, game) {
    state.game = game;
  },
  setListColors(state, listColors) {
    state.listColors = listColors;
  },
  isLoaded(state) {
    state.loaded = true;
  },
  setCurrentColor(state, color) {
    state.currentColor = color;
  }
}