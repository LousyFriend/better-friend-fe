import request from 'superagent';

// const URL = 'https://better-friend.herokuapp.com';
const URL = 'http://localhost:7890';



export default async function getContactById(token, contactId) {
  try {
    const response = await request
      .get(`${URL}/api/contacts/${contactId}`)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}