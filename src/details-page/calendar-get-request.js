import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const getCalendarEvents = async (token, oauth) => {
  const response = await request.get(`${URL}/api/calendar`).set({ 'Authorization': token, 'Oauth': oauth });

  return response.body;
};

export { getCalendarEvents };