import Vue from 'vue'
import Vuex from 'vuex'
import { initNewGame } from '@/api/apiGame';

Vue.use(Vuex)

const configGame = {
  "num_colors": 6,
  "num_slots": 4, 
  "max_guesses": 10
};

export default new Vuex.Store({
  state: {
    game: {},
    listColors: [],
    checkColors: [],
    configGame
  },
  mutations: {
    setGame(state, game) {
      state.game = game;
    },
    setListColors(state, listColors) {
      state.listColors = listColors;
    }
  },
  actions: {
    createGame({commit}) {
      initNewGame(configGame).then(result => { 
          commit('setGame', result);
          commit('setListColors', result.colors);
      })
      .catch(error => { console.log(error); });
    }
  },
})
