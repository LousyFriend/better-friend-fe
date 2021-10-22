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
      //  Grab the access token from the incoming response arguement
       const oauthGoogle = response.tokenObj.access_token;
      //  Send the new token to app.js state so it can be passed as props
       await this.props.handleState(oauthGoogle);
      //  set the state to the email and google id values on the response arguement
       await this.setState({ email: response.profileObj.email, password:response.profileObj.googleId });
      //  send email from current state to app.js state to be passed as props. 
       await this.props.handleEmail(this.state.email); 
      //  Create a token.
       await this.makeToken();
     }
       makeToken= async () => {  
        //  Grab email from state.
         const email = await this.state.email;
        //  Grab password from state.
         const password = await this.state.password;
        //  Attempt to login/signup..
         const token = await login(email, password);
        //  send returning token from login post to app.js so it can be passed as props.
         await this.props.handleTokenChange(token);
        //  redirect the user to the contacts page!
         await this.props.history.push('/contacts');      
       }

       render() {
         return (
           <>
             <main class='container mx-auto bg-gray-200 items-center'>
               <div class="flex p-10 justify-center border-4 border-red-700 ">  
   
                 <div class="max-w-sm md:w-screen rounded overflow-hidden shadow-xl bg-gray-200 box-shadow border-black .border-6 ">
                   <img class="w-full" src="blank-avatar.jpg" alt="BetterFriends"/>
                   <div class="px-6 py-4">
                     <div class="font-bold text-xl mb-2"></div>
                     <p class="text-black">
                      Using your google account allows you to create events through our site and have them appear directly on your google calendar
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
