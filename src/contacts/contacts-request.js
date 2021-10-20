import request from 'superagent';

// const URL = 'https://better-friend.herokuapp.com';
const URL = 'http://localhost:7890';

const getContacts = async (token) => {
  const response = await request.get(`${URL}/api/contacts`).set('Authorization', token); // will need an update when /api route added to include .set

  return response.body;
};

export { getContacts };