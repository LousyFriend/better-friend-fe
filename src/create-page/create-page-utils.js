import request from 'superagent';


const URL = 'https://better-friend.herokuapp.com';


export default async function postContact(token, Obj) {
  try {
    const response = await request
      .post(`${URL}/api/contacts`)
      .send(Obj)
      .set('Authorization', token);

    return response.body;
  } catch (error) {
    console.log(error);
  }
}