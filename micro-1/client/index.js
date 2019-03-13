import { renderVue, Vue } from 'hypernova-vue';
import RepoList from '../src/components/RepoList';

renderVue('RepoList', Vue.extend(RepoList))();
