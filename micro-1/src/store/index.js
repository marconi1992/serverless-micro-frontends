import { Vue } from 'hypernova-vue';
import Vuex from 'vuex';
import repos from './repos';

Vue.use(Vuex);

module.exports = () => new Vuex.Store({
  modules: {
    repos: repos(),
  },
});
