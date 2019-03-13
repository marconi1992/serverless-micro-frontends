const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const getContent = require('./microfrontends/content');

module.exports.handler = async (event) => {
  const { term = 'vue.js' } = event.queryStringParameters || {};

  const documentBase = fs.readFileSync(path.join(__dirname, 'index.html')).toString();

  const content = await getContent(term);

  const body = Mustache.render(documentBase, { content });

  return {
    statusCode: 200,
    body,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=300',
    },
  };
};
