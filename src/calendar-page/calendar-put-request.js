import request from 'superagent';

// const URL = 'https://better-friend.herokuapp.com';
const URL = 'http://localhost:7890';

const putCalendarEvent = async (token, oauth, contactId, body) => {
  //body needs event_id and next_date
  const response = await request.put(`${URL}/api/calendar${contactId}`).send(body).set({ 'Authorization': token, 'Oauth': oauth });
  
  return response.body;
};

export { putCalendarEvent };