import Vue from 'vue';
import {getDefaultState} from '@/store/defaultState';

export default {
  updateGame(state, game) {
    state.game = game;
  },
  resetState (state) {
    Object.assign(state, getDefaultState())
  },
  setListColors(state, listColors) {
    state.listColors = listColors;
  },
  isLoaded(state) {
    state.loaded = true;
  },
  setCurrentColor(state, color) {
    state.currentColor = color;
  },
  setCurrentGuess(state, index) {
    state.currentGuess = index;
  },
  setCode(state, code) {
    state.code = code;
  },
  resetCode(state) {
    state.code = [];
    state.guessRowColors = [];
  },
  pegsColorSolution(state, pegsWhite, pegsBlack){
    if(pegsWhite.length > 0) {
      pegsWhite.forEach(() => {
        state.pegsColor.push('white');
      });
    }
    if(pegsBlack.length > 0) {
      pegsWhite.forEach(() => {
        state.pegsColor.push('black');
      });
    }
    while(state.pegsColor.length < 4) {
      state.pegsColor.push('gray');
    }
  },
  addColorToCheck(state, {color, indexArray}) {
    state.code[indexArray] = color;
    Vue.set(state, 'code', [...state.code]);
    state.guessRowColors.splice(0,1, state.code);
  }
}