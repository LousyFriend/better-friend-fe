import request from 'superagent';

const URL = 'https://better-friend.herokuapp.com';


export default async function postCommentById(token, contactId, commentObj) {
  try {
    const response = await request
      .post(`${URL}/api/comments/${contactId}`)
      .send(commentObj)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}