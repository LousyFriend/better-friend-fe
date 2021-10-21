import request from 'superagent';

// const URL = 'https://better-friend.herokuapp.com';
const URL = 'http://localhost:7890/';


export default async function deleteContact(token, contact_id) {
  try {
    const response = await request
      .delete(`${URL}/api/contacts/${contact_id}`)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}