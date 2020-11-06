import { initNewGame, addNewGuesses } from '@/api/apiGame';

export default {
  async createGame({commit, dispatch, state}) {
    await initNewGame(state.defaultConfig).then(result => {
      commit('resetState');
      commit('updateGame', result);
      commit('setListColors', result.colors);
    }).then( () => {
      commit('isLoaded');
      commit('setStatus');
      dispatch('setRow', 0);
    })
    .catch(error => { console.log(error); });
  },
  setRow({commit}, currentRow) {
    commit('setRow', currentRow);
  },
  addColorToCheck({commit}, {color, indexArray}) {
    commit('addColorToCheck', {color, indexArray});
  },
  resetCode({commit}) {
    commit('resetCode');
  },
  addPegsColor({state, commit}){
    const whitePegs = state.game.guesses[state.row].white_pegs;
    const blackPegs = state.game.guesses[state.row].black_pegs;
    const failPegsNumber = 4 - (whitePegs + blackPegs);

    for (let index = 0; index < blackPegs; index+=1) {
      commit('addPegColorResponse', state.pegsColorOption.exact);
    }

    for (let index = 0; index < whitePegs; index+=1) {
      commit('addPegColorResponse', state.pegsColorOption.partial);
    }
   
    for (let index = 0; index < failPegsNumber; index+=1) {
      commit('addPegColorResponse', state.pegsColorOption.default)
    }
    commit('setPegsRowColors');
  },
  async sentCheckGuesses({dispatch, commit, state}) {
    const data = {};
    data.code = state.code;
    await addNewGuesses(state.game.id, data).then(result => {
      dispatch('resetCode');
      commit('updateGame', result.data);
    }).then( () => {
      commit('setStatus');
      dispatch('addPegsColor');
      state.status == 'running' && dispatch('setRow', state.row+=1);
    })
    .catch(error => { console.log('sdf', error); });
  }
}