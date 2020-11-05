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
  setStatus(state){
    state.status = state.game.status;
  },
  resetCode(state) {
    state.code = [];
    state.guessRowColors = [];
  },
  addPegColorResponse(state, color) {
    state.currentRowPegs.push(color);
  },
  setPegsRowColors(state) {
    state.rowsPegs.push(state.currentRowPegs);
    state.currentRowPegs = [];
  },
  addColorToCheck(state, {color, indexArray}) {
    state.code[indexArray] = color;
    Vue.set(state, 'code', [...state.code]);
    state.guessRowColors.splice(0,1, state.code);
  }
}