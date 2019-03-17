const axios = require('axios');

const contentUrl = process.env.CONTENT_MICRO_URL;

module.exports = term => axios.post(`${contentUrl}/batch`, {
  content: {
    name: 'RepoList',
    data: {
      term,
    },
  },
  defaultContent: {
    name: 'RepoList',
    data: {
      term: 'Hypernova',
    },
  },
}).then((res) => {
  const { data } = res;
  const { results } = data;
  return Object.keys(results).map(key => results[key].html);
});
