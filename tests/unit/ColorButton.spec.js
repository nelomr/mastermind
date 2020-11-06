import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ColorButton from '@/components/ColorButton/ColorButton.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ColorButton.vue', () => {
  let color = 'lightgray';
  let index = 0;
  let indexRow = 0;
  let isGuessButton = false;
  let row = 0;
  let status = 'running';
  let currentColor = 'blue';
  
  let props;
  let computed;
  let actions;
  let store;

  beforeEach(() => {
    props = {
      color,
      index,
      indexRow,
      isGuessButton
    };
    computed = {
      row() {
          return row;
      },
      status() {
          return status;
      },
      currentColor() {
        return currentColor;
      }
    };
    actions = {
      addColorToCheck: jest.fn(),
      setCurrentColor: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  const build = () => {
    const wrapper = shallowMount(ColorButton, {
      propsData: props,
      computed,
      mocks: {$store: store}
    });

    return {
      wrapper,
      button: () => wrapper.find('.color-button')
    };
  };

  it('renders the component', () => {
    const {wrapper} = build();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('color default on init', () => {
    const {wrapper} = build();
   
    expect(wrapper.vm.colorDefined).toEqual('lightgray');
  });

  it('renders the option button component', () => {
    const {wrapper} = build();

    expect(wrapper.find('.color-button').classes('is-option-color')).toBe(true);
  });

  it('renders the guess button component', async() => {
    const {wrapper} = build();

    wrapper.setProps({
      isGuessButton: true,
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.find('.color-button').classes('is-option-color')).toBe(false);
  });

  it('get color clicked on button option component', () => {
    const {wrapper, button} = build();
    const getColor = jest.spyOn(wrapper.vm, 'getColor'); 

    button().trigger('click');
    expect(getColor).toHaveBeenCalled();
    expect(actions.setCurrentColor).toHaveBeenCalled();
  });

  it('set color clicked on button guess component', () => {
    const {wrapper, button} = build();
    const setColor = jest.spyOn(wrapper.vm, 'setColor'); 

    wrapper.setProps({
      isGuessButton: true,
    });

    button().trigger('click');
    expect(setColor).toHaveBeenCalled();
    expect(actions.addColorToCheck).toHaveBeenCalled();
  });
})
