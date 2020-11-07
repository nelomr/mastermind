import { initNewGame, addNewGuesses } from '@/api/apiGame';
import defaultModel from '@/models/defaultModel';

export default {
  async createGame({commit, dispatch, state}) {
    await initNewGame(state.defaultConfig).then(result => {
      const modelResult = defaultModel(result);

      commit('RESET_STATE');
      commit('UPDATE_GAME', modelResult);
      commit('SET_LIST_COLORS', modelResult.colors);
    }).then( () => {
      commit('IS_LOADED');
      commit('SET_STATUS');
      dispatch('setRow', 0);
    })
    .catch(error => { console.log(error); });
  },
  setRow({commit}, currentRow) {
    commit('SET_ROW', currentRow);
  },
  addColorToCheck({commit}, {color, indexArray}) {
    commit('ADD_COLOR_TO_CHECK', {color, indexArray});
  },
  resetCode({commit}) {
    commit('RESET_CODE');
  },
  setCurrentColor({commit}, color) {
    commit('SET_CURRENT_COLOR', color);
  },
  addPegsColor({state, commit}){
    const whitePegs = state.game.guesses[state.row].whitePegs;
    const blackPegs = state.game.guesses[state.row].blackPegs;
    const failPegsNumber = 4 - (whitePegs + blackPegs);

    for (let index = 0; index < blackPegs; index+=1) {
      commit('ADD_PEG_COLOR_RESPONSE', state.pegsColorOption.exact);
    }

    for (let index = 0; index < whitePegs; index+=1) {
      commit('ADD_PEG_COLOR_RESPONSE', state.pegsColorOption.partial);
    }
   
    for (let index = 0; index < failPegsNumber; index+=1) {
      commit('ADD_PEG_COLOR_RESPONSE', state.pegsColorOption.default)
    }
    commit('SET_PEGS_ROW_COLORS');
  },
  async sentCheckGuesses({dispatch, commit, state}) {
    const data = {};
    data.code = state.code;
    await addNewGuesses(state.game.id, data).then(result => {
      const modelResult = defaultModel(result.data);

      dispatch('resetCode');
      commit('UPDATE_GAME', modelResult);
    }).then( () => {
      commit('SET_STATUS');
      dispatch('addPegsColor');
      state.status == 'running' && dispatch('setRow', state.row+=1);
    })
    .catch(error => { console.log('sdf', error); });
  }
}