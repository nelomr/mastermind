import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PegsList from '@/components/PegsList/PegsList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PegsList.vue', () => {
  let pegsColor = ['lightgray','lightgray','lightgray','lightgray'];
  let rowsPegs;
  let pegsColorDefault = 'lightgray';
  let indexRow = 0;

  let props;
  let store;
  let state;

  beforeEach(() => {
    props = {
      indexRow
    };
    state = {
      pegsColor,
      rowsPegs: pegsColor,
      pegsColorDefault
    };
    store = new Vuex.Store({
      state
    });
  });
  const build = () => {
    const wrapper = shallowMount(PegsList, {
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
