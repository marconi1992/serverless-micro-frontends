import { renderVuex } from 'hypernova-vue';
import createStore from '../src/store';
import RepoList from '../src/components/RepoList.vue';

renderVuex('RepoList', RepoList, createStore)();
