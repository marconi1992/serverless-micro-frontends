import axios from 'axios';

const token = process.env.GITHUB_TOKEN;

export const search = (term, page, per_page = 8) => axios.get('https://api.github.com/search/repositories', {
  params: {
    q: term,
    per_page,
    page,
    access_token: token,
  },
})
  .then((res) => {
    const { data } = res;
    return data.items.map(item => ({
      id: item.id,
      name: item.name,
    }));
  });
