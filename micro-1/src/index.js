/* eslint-disable global-require */
import hypernova from 'hypernova-lambda';
import { renderVuex, Vue } from 'hypernova-vue';
import createStore from './store';
import RepoList from './components/RepoList';

const getComponent = async (name, context) => {
  if (name === 'RepoList') {
    const store = createStore();
    const { term, page, size = 8 } = context.props;

    await store.dispatch('repos/search', { term, page, size });
    const component = Vue.extend({
      ...RepoList,
      store,
    });
    return renderVuex(name, component);
  }
  return null;
};

export const handler = (event, context, callback) => {
  hypernova(event, { getComponent }, callback);
};
