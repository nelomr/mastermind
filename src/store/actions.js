import { initNewGame } from '@/api/apiGame';
const configGame = {
  "num_colors": 6,
  "num_slots": 4, 
  "max_guesses": 10
};

export default {
  async createGame({commit}) {
    await initNewGame(configGame).then(result => { 
     commit('setGame', result);
     commit('setListColors', result.colors);
    }).then( () => {
      commit('isLoaded');
    })
    .catch(error => { console.log(error); });
  }
}