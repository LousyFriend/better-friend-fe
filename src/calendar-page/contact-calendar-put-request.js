import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const putContactCalendar = async (token, contactId, body) => {
  const response = await request.put(`${URL}/api/contact/calendar/${contactId}`).send(body).set('Authorization', token);

  return response.body;
};

export { putContactCalendar };