const axios = require('axios');

const contentUrl = process.env.CONTENT_MICRO_URL;

module.exports = (term, page = 1) => axios.post(`${contentUrl}/batch`, {
  content: {
    name: 'RepoList',
    data: {
      term,
      page,
    },
  },
}).then((res) => {
  const { data } = res;
  return data.results.content.html;
});
