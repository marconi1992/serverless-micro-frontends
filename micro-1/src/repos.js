const Repositories = require('./services/repos');

export const handler = async (event) => {
  const { term = 'vue.js', page = 1, size = 8 } = event.queryStringParameters || {};

  const repos = await Repositories.search(term, page, size);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(repos),
  };
};
