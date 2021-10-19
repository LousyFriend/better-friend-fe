import {
  request
} from 'superagent';





export async function login(email, password) {
  const response = await request
    .post(`${URL}auth/signin`)
    .send({
      email: email,
      password: password
    });

  return response.body;
}