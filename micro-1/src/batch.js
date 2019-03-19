import hypernova from 'hypernova-lambda';
import { renderVuex } from 'hypernova-vue';
import createStore from './store';
import RepoList from './components/RepoList';

const getComponent = async (name) => {
  if (name === 'RepoList') {
    return renderVuex(name, RepoList, createStore);
  }
  return null;
};

export const handler = (event, context, callback) => {
  hypernova(event, { getComponent }, callback);
};
