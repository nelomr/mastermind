import mutations from '@/store/mutations'

test('Set Array code with color ordered in correct index selected', () => {
  const state = {
    code: [],
    guessRowColors: []
  }
  mutations.addColorToCheck(state, {color: 'green', indexArray: 1});
  expect(state.code).toStrictEqual([undefined, 'green']);

  mutations.addColorToCheck(state, {color: 'white', indexArray: 1});
  expect(state.code).toStrictEqual([undefined, 'white']);

  mutations.addColorToCheck(state, {color: 'green', indexArray: 0});
  expect(state.code).toStrictEqual(['green', 'white']);
})