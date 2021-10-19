import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';


export default class Login extends Component {

    responseGoogle=(response)=> {
      console.log(response);
      console.log(response.profileObj);
    }
    render() {
      return (
        <div>
          <GoogleLogin 
            clientId='700191719998-4ehio8jd3oqho8pv4kfevr7ofjgq6akb.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            scope={'https://www.googleapis.com/auth/calendar'}
          />     
         
        </div>
      );
    }
}
