import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const postCalendarEvent = async (token, oauth, body) => {

  const response = await request.post(`${URL}/api/calendar`).send(body).set({ 'Authorization': token, 'Oauth': oauth });

  return response.body;
};

export { postCalendarEvent };