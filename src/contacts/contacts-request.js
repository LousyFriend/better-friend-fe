import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const getContacts = async (token) => {
  const response = await request.get(`${URL}/api/contacts`).set('Authorization', token);

  return response.body;
};

export { getContacts };