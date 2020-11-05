import Vue from 'vue';
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
  resetCode({commit}) {
    commit('resetCode');
  },
  addPegsColor({state}){
    Vue.set(state, 'pegsColors', []);
    const whitePegs = state.game.guesses[state.row - 1].white_pegs;
    const blackPegs = state.game.guesses[state.row - 1].black_pegs;
    
    for (let index = 0; index < whitePegs; index+=1) {
      state.pegsColors.push('white');
    }
    Vue.set(state.pegsColors, 0, [...state.pegsColors]);
    for (let index = 0; index < blackPegs; index+=1) {
      state.pegsColors.push('black');
    }
    Vue.set(state.pegsColors, 0, [...state.pegsColors]);
    const failPegsNumber = 4 - (whitePegs + blackPegs);
    
    for (let index = 0; index < failPegsNumber; index+=1) {
      state.pegsColors.push('gray')
    }
    Vue.set(state.pegsColors, 0, [...state.pegsColors]);
    console.log(state.pegsColors);
  },
  async sentCheckGuesses({dispatch, commit, state}) {
    let data = {};
    data.code = state.code;
    await addNewGuesses(state.game.id, data).then(result => {
      dispatch('resetCode');
      commit('updateGame', result.data);
      dispatch('setCurrentGuess', state.row+=1);
    }).then( () => {
      dispatch('addPegsColor');
    })
    .catch(error => { console.log(error); });
  }
}