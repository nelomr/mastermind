import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import TitleBoard from '@/components/TitleBoard/TitleBoard.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TitleBoard.vue', () => {
  let game = null;

  let store;
  let state;

  beforeEach(() => {
   
    state = {
      game
    };
    store = new Vuex.Store({
      state
    });
  });
  const build = () => {
    const wrapper = shallowMount(TitleBoard, {
      mocks: {$store: store}
    });

    return {
        wrapper
    };
  };

  it('renders the component list', () => {
    const {wrapper} = build();

    expect(wrapper.html()).toMatchSnapshot();
  });
})
