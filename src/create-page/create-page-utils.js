import request from 'superagent';


const URL = 'https://better-friend.herokuapp.com';


export default async function postContact(token, Obj) {
  try {
    const data = await request
      .post(`${URL}/contacts`)
      .send(Obj)
      .set('Authorization', token);

    return data.response;
  } catch (error) {
    console.log(error);
  }
}