import { initNewGame, addNewGuesses } from '@/api/apiGame';

export default {
  async createGame({commit, dispatch, state}) {
    await initNewGame(state.defaultConfig).then(result => {
      commit('resetState');
      commit('updateGame', result);
      commit('setListColors', result.colors);
    }).then( () => {
      commit('isLoaded');
      dispatch('setCurrentGuess', state.row);
    })
    .catch(error => { console.log(error); });
  },
  setCurrentGuess({commit}, currentGuess) {
    commit('setCurrentGuess', currentGuess);
  },
  addColorToCheck({commit}, {color, indexArray}) {
    commit('addColorToCheck', {color, indexArray});
  },
  sentCheckGuesses({dispatch, commit, state}) {
    let data = {};
    data.code = state.code;
    addNewGuesses(state.game.id, data).then(result => {
      commit('updateGame', result.data);
      dispatch('setCurrentGuess', state.row+=1);
    })
    .catch(error => { console.log(error); });
  }
}