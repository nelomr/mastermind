import {defaultConfig, pegsColorOption} from '@/configurations/defaultConfig'
export function getDefaultState() {
  return {
    defaultConfig,
    pegsColorOption,
    game: null,
    row: null,
    listColors: null,
    guessRowColors: [],
    code: [],
    currentRowPegs: [],
    rowsPegs: [],
    currentColor: null,
    loaded: false,
    status: null
  }
}