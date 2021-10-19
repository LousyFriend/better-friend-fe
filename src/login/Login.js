import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { login } from '../fetch-utils';
// import request from 'superagent';


export default class Login extends Component {
state = {
  email: '',
  password:'',

}
     responseGoogle= async (response)=> {
       console.log(response);
       console.log('Oath token', response.tokenObj.access_token);
       console.log(response.tokenObj.token_type);
       console.log(response.profileObj.email);
       console.log(response.profileObj.googleId);
       const oauthGoogle = await response.tokenObj.access_token; 
       this.setState({ email:response.profileObj.email, password:response.profileObj.googleId });
       this.props.handleOath(oauthGoogle);

     }
    handleLocalToken = async () => {
      const { email, password } = this.state;
      const token = await login(email, password);
      this.props.handleTokenChange(token);
    }
    

    render() {
      console.log(this.state.email);
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
