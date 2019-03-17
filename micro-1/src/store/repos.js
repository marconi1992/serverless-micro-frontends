import * as RepoProvider from '../services/repos';

/* eslint-disable no-param-reassign */
export default {
  namespaced: true,
  state: () => ({
    items: [],
    search: {
      term: '',
      page: 1,
      size: 8,
    },
  }),
  actions: {
    async search({ commit }, { term, page, size }) {
      const repos = await RepoProvider.search(term, page, size);
      commit('pushItems', repos);
      commit('setMetaSearch', {
        term,
        page,
        size,
      });
    },

    async loadMore({ dispatch, state: { search } }) {
      dispatch('search', {
        ...search,
        page: search.page + 1,
      });
    },
  },
  mutations: {
    pushItems(state, items) {
      state.items = state.items.concat(items);
    },
    setMetaSearch(state, search) {
      state.search = search;
    },
  },
};
