import request from 'superagent';

// const URL = 'https://better-friend.herokuapp.com';
const URL = 'http://localhost:7890';



export default async function putContact(token, contact_id, updatedContactObj) {
  try {
    const response = await request
      .put(`${URL}/api/contacts/${contact_id}`)
      .send(updatedContactObj)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}