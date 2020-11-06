import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import PegItem from '@/components/PegItem/PegItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PegItem.vue', () => {
  let color = 'lightgray';
  let pegsColorOption = 'graylight';
  let props;
  let store;
  let state;

  beforeEach(() => {
    props = {
      color
    };
    state = {
      pegsColorOption
    };
    store = new Vuex.Store({
      state
    });
  });
  const build = () => {
    const wrapper = shallowMount(PegItem, {
      props,
      mocks: {$store: store}
    });

    return {
        wrapper
    };
  };

  it('renders the component', () => {
    const {wrapper} = build();

    expect(wrapper.html()).toMatchSnapshot();
  });
})
