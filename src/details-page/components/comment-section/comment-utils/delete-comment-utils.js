import request from 'superagent';

// const URL = 'https://better-friend.herokuapp.com';
const URL = 'http://localhost:7890';


export default async function deleteComment(token, comment_id) {
  try {
    const response = await request
      .delete(`${URL}/api/comments/${comment_id}`)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}