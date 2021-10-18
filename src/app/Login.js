import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
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
            clientId=''
            buttonText='Login'
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />     
         
        </div>
      );
    }
}
