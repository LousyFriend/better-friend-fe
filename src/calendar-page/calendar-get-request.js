
// I could go either way on these functions, but I lean toward bundling a few of them into the same file--this feels like a bit too much modularity to me, and would feel overwhelming if I were jumping into a project, especially as the number of async requests begins to grow (you can imagine this becoming a problem once you have 50+ request files each exporting one function)
import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';
// const URL = 'http://localhost:7890';

const getCalendarEvents = async (token, oauth, eventId) => {
  const response = await request.get(`${URL}/api/calendar/${eventId}`).set({ 'Authorization': token, 'Oauth': oauth });

  return response.body.items; //returns all instances of recurring event
};

export { getCalendarEvents };