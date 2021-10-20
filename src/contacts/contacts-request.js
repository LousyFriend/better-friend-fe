import request from 'superagent';

const getContacts = async (token) => {
  const response = await request.get('https://better-friend.herokuapp.com/api/contact-cards').set('Authorization', token); // will need an update when /api route added to include .set

  return response.body;
};

export { getContacts };