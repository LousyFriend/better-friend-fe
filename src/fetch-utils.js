import 
request
  from 'superagent';
// const URL = 'http://localhost:7890/';
// const URL = 'https://better-friend.herokuapp.com/';


export async function login(email, password) {
  console.log(typeof password);
  console.log(email, password);
  try { const response = await request.post('http://localhost:7890/auth/signin').send({
    email: email,
    password: password
  });
  console.log(response.body);
  return response.body.token;
  }
  catch (e) {
    console.log(e);  
  }

 
}