import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import RowBoard from '@/components/RowBoard/RowBoard.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('RowBoard.vue', () => {
  let defaultConfig = {'num_slots': 4};
  let row = 0;
  let indexRow = 0;

  let props;
  let store;
  let state;

  beforeEach(() => {
    props = {
      indexRow
    };
    state = {
      defaultConfig,
      row,
    };
    store = new Vuex.Store({
      state
    });
  });
  const build = () => {
    const wrapper = shallowMount(RowBoard, {
      props,
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
