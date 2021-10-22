import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const putCalendarEvent = async (token, oauth, eventId, body) => {
  const response = await request.put(`${URL}/api/calendar/${eventId}`).send(body).set({ 'Authorization': token, 'Oauth': oauth });
  
  return response.body;
};

export { putCalendarEvent };