import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';


export default async function getCommentsById(token, contactId) {
  try {
    const response = await request
      .get(`${URL}/api/comments/${contactId}`)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}