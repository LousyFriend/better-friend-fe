import 
request
  from 'superagent';
const URL = 'http://localhost:7890/';
// const URL = 'https://better-friend.herokuapp.com/';


export async function login(email, password) {
  console.log(typeof password);
  console.log(email, password);
  try { const response = await request.post(`${URL}auth/signup`).send({
    email: email,
    password: password
  });
  console.log(response.body);
  return response.body.token;
  }
  catch (e) {
    const response = await request.post(`${URL}auth/signin`).send({
      email: email,
      password: password
    });
    console.log(response.body);
    return response.body.token;
     
  }

 
}