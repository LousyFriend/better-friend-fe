import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';


export default async function postCommentById(token, contact_id, commentObj) {
  try {
    const response = await request
      .post(`${URL}/api/comments/${contact_id}`)
      .send(commentObj)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}