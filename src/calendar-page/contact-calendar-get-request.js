import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const getContactCalendar = async (token, contactId) => {
  const response = await request.get(`${URL}/api/contact/calendar/${contactId}`).set('Authorization', token);

  return response.body;
};

export { getContactCalendar };