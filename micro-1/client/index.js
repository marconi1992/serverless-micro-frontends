import { renderVuex, Vue } from 'hypernova-vue';
import createStore from '../src/store';
import RepoList from '../src/components/RepoList.vue';

const store = createStore();

renderVuex('RepoList', Vue.extend({
  ...RepoList,
  store,
}))();
