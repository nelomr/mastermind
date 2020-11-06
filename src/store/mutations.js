import Vue from 'vue';
import {getDefaultState} from '@/store/defaultState';

export default {
  UPDATE_GAME(state, game) {
    state.game = game;
  },
  RESET_STATE(state) {
    Object.assign(state, getDefaultState())
  },
  SET_LIST_COLORS(state, listColors) {
    state.listColors = listColors;
  },
  IS_LOADED(state) {
    state.loaded = true;
  },
  SET_CURRENT_COLOR(state, color) {
    state.currentColor = color;
  },
  SET_ROW(state, index) {
    state.row = index;
  },
  SET_STATUS(state){
    state.status = state.game.status;
  },
  RESET_CODE(state) {
    state.code = [];
    state.guessRowColors = [];
  },
  ADD_PEG_COLOR_RESPONSE(state, color) {
    state.currentRowPegs.push(color);
  },
  SET_PEGS_ROW_COLORS(state) {
    state.rowsPegs.push(state.currentRowPegs);
    state.currentRowPegs = [];
  },
  ADD_COLOR_TO_CHECK(state, {color, indexArray}) {
    state.code[indexArray] = color;
    Vue.set(state, 'code', [...state.code]);
    state.guessRowColors.splice(0,1, state.code);
  }
}