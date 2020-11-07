import { initNewGame } from '@/api/apiGame';
import actions from '@/store/actions';

jest.mock('@/api/apiGame', () => ({
  initNewGame: jest.fn(() => Promise.resolve({'id':1,'reference':'497B896E22','colors':['red','blue','green','yellow','orange','white'],'status':'running','guesses':[],'max_guesses':8,'secret_code':['red','blue','yellow','blue'],'num_colors':6,'num_slots':4}))
}));

describe('actions', () => {
  let state;
  let commit = jest.fn();
  let dispatch = jest.fn();
  let game = null;
  let defaultConfig = {
    'num_colors': 6,
    'num_slots': 4, 
    'max_guesses': 5
  };

  beforeEach(() => {
    state = {
      game,
      defaultConfig
    };
  })

  it('tests with a mock commit', () => {
    actions.createGame({commit, dispatch, state });
    expect(initNewGame).toHaveBeenCalledWith(defaultConfig);
  })
})