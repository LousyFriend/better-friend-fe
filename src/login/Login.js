import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { login } from './fetch-utils';
import { button } from './style';
export default class Login extends Component {
    state = {
      password: '',
      email: ''
    }
     responseGoogle= async (response)=> {
       const oauthGoogle = response.tokenObj.access_token;
       this.props.handleState(oauthGoogle);
       await this.setState({ email: response.profileObj.email, password:response.profileObj.googleId });
       await this.makeToken();
     }
     makeToken= async () => {  
       const email = await this.state.email;
       const password = await this.state.password;
       const token = await login(email, password);
       await this.props.handleTokenChange(token);
       await this.props.history.push('/contacts'); }

     render() {
       return (
         <>
           <main class='container mx-auto bg-blue-600 items-center'>
             <div class="p-10">  
   
               <div class="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
                 <img class="w-full" src="blank-avatar.jpg" alt="BetterFriends"/>
                 <div class="px-6 py-4">
                   <div class="font-bold text-xl mb-2"></div>
                   <p class="text-black">
                      Using your google account allows you to create events through our site and have them appear directely on your google calendar
                   </p>
                 </div>
                 <div class={button}>
                   <GoogleLogin 
                     clientId='700191719998-4ehio8jd3oqho8pv4kfevr7ofjgq6akb.apps.googleusercontent.com'
                     buttonText='Login'
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}
                     cookiePolicy={'single_host_origin'}
                     scope={'https://www.googleapis.com/auth/calendar'}
                   />
                 </div> 
                 <div class="px-6 pt-4 pb-2">
                   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#KeepinTouch</span>
                   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Reminders</span>
                   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CreateEvents</span>
                   <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Contacts with Comments</span>
                 </div>
                 
               </div>
             </div>
      
           </main>
         </>
       );
     }
}
