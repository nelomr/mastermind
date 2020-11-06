import Vue from 'vue';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ColorList from '@/components/ColorList/ColorList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ColorList.vue', () => {
    let listColors = null;
    let store;

    let computed = {};
  
    beforeEach(() => {
      computed = {
        listColors() {
          return listColors;
        },
      }
      store = new Vuex.Store({
      });
    });

    const build = () => {
        const wrapper = shallowMount(ColorList, {
            computed,
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

  it('renders color buttons list ', () => {
    const build = () => {
      const wrapper = shallowMount(ColorList,
        {
          computed: {
            listColors() {
              return ['red','blue','green','yellow','orange','white'];
            }
          },
          mocks: {$store: store}
        }
      );

      return {
          wrapper
      };
    };
    const {wrapper} = build();
    
    expect(wrapper.html()).toMatchSnapshot();
  });
  
})
