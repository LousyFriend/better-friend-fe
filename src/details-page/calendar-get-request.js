// google auth token
// api key

import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const getCalendarEvents = async (token, oauth) => {
  const response = await request.get(`${URL}/api/calendar/${oauth}`).set('Authorization', token);

  return response.body;
};

export { getCalendarEvents };