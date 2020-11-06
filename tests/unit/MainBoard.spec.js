import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import MainBoard from '@/components/MainBoard/MainBoard.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MainBoard.vue', () => {
  let config = {
    'num_colors': 6,
    'num_slots': 4, 
    'max_guesses': 5
  };

  let store;
  let computed;

  beforeEach(() => {
    computed = {
      defaultConfig() {
          return config;
      }
    };
    store = new Vuex.Store({});
  });
  const build = () => {
    const wrapper = shallowMount(MainBoard, {
      computed,
      mocks: {$store: store}
    });

    return {
        wrapper
    };
  };

  it('renders the component no button list', () => {
    const {wrapper} = build();

    expect(wrapper.html()).toMatchSnapshot();
  });
})
