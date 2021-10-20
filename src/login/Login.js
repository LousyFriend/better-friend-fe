import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { login } from '../fetch-utils';

export default class Login extends Component {
    state = {
      password: '',
      email: ''
    }
     responseGoogle= async (response)=> {
       const oauthGoogle = response.tokenObj.access_token;
       console.log(oauthGoogle); //need to delete
       this.props.handleState({ oauthGoogle:oauthGoogle });
       await this.setState({ email: response.profileObj.email, password:response.profileObj.googleId });
       await this.makeToken();
     }
     makeToken= async () => {  
       const email = await this.state.email;
       const password = await this.state.password;
       const token = await login(email, password);
       await this.props.handleTokenChange(token);
       this.props.history.push('/contacts'); }

     render() {
       return (
         <>
           <main>
             
             <GoogleLogin 
               clientId='700191719998-4ehio8jd3oqho8pv4kfevr7ofjgq6akb.apps.googleusercontent.com'
               buttonText='Login'
               onSuccess={this.responseGoogle}
               onFailure={this.responseGoogle}
               cookiePolicy={'single_host_origin'}
               scope={'https://www.googleapis.com/auth/calendar'}
             />     
           </main>
         </>
       );
     }
}
