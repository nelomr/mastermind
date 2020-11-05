import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import EventBus from './modules/event-bus';
import App from './App.vue';
import store from './store';
import "@/assets/styles/_global.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
