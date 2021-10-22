
import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const getCalendarEvents = async (token, oauth, eventId) => {
  const response = await request.get(`${URL}/api/calendar/${eventId}`).set({ 'Authorization': token, 'Oauth': oauth });

  return response.body.items; //returns all instances of recurring event
};

export { getCalendarEvents };