import axios from 'axios';

const reposURL = process.env.REPOS_URL;

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
    async search({ commit }, { term, page = 1, size = 8 }) {
      const repos = await axios.get(reposURL, {
        params: {
          term,
          page,
          size,
        },
      }).then(res => res.data);
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
