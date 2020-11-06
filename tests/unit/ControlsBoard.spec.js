import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ControlsBoard from '@/components/ControlsBoard/ControlsBoard.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ControlsBoard.vue', () => {
  let game = null;

  let store;
  let actions;
  let computed;

  beforeEach(() => {
    actions = {
      createGame: jest.fn()
    };
    computed = {
      game() {
          return game;
      }
    };
    store = new Vuex.Store({
      actions
    });
  });
  const build = () => {
    const wrapper = shallowMount(ControlsBoard, {
      computed,
      mocks: {$store: store}
    });

    return {
        wrapper,
        buttonNewGame: () => wrapper.find('.controls-board--button')
    };
  };

  it('renders the component no button list', () => {
    const {wrapper} = build();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('On button click call create game method', () => {
    const {wrapper, buttonNewGame} = build();
    const reset = jest.spyOn(wrapper.vm, 'reset');

    buttonNewGame().trigger('click');
    expect(reset).toHaveBeenCalled();
    expect(actions.createGame).toHaveBeenCalled();
  });

  it('On button click call return game object', () => {
    const {wrapper, buttonNewGame} = build();

    expect(typeof wrapper.vm.game).toEqual(
      expect.objectContaining(null)
    );

    buttonNewGame().trigger('click');
    expect(actions.createGame).toHaveBeenCalled();
    expect(typeof wrapper.vm.game).toBe('object');
  });
})
