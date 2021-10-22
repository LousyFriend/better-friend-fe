import { Component } from 'react';
import Home from './home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
import './App.css';
import Login from './login/Login.js';
import Contacts from './contacts/Contacts.js';
import DetailsPage from './details-page/DetailsPage.js';
import CreatePage from './create-page/CreatePage.js';
import CalendarPage from './calendar-page/CalendarPage.js';
const TOKEN = 'TOKEN';

export default class App extends Component {
state = {
  token: localStorage.getItem(TOKEN) || '',
  oauthGoogle: '',
  email:''
}
handleEmail = async (email) => {
  await this.setState({ email: email });
}
handleState = async (oauthGoogle) => {
  await this.setState({ oauthGoogle: oauthGoogle });
  
} 
handleTokenChange = async (token) => {
  localStorage.setItem(TOKEN, token);
  await this.setState({ token: token });
}
logout = () => {
  localStorage.clear();
  this.setState({ token: '' });
}

render() {
  return (
    <div className="App" class="w-screen h-screen">
      <Router>
        <header class='flex text-center bg-black text-md md:text-4xl justify-evenly items-center text-betterFriendOrange h-12 md:h-24'>
          <NavLink
            exact
            activeStyle={{ fontWeight: 'bold' }}
            to='/'>Home
          </NavLink>   

          { 
            this.state.token
              ? <NavLink
                exact 
                activeStyle={{ fontWeight: 'bold' }}
                to='/contacts'>Contacts
              </NavLink> 
              : <NavLink
                exact 
                activeStyle={{ fontWeight: 'bold' }}
                to='/Login'>Login
              </NavLink>   
          }
          <NavLink
            exact 
            activeStyle={{ fontWeight: 'bold' }}
            to='/create'>Create
          </NavLink>        
          <NavLink
            exact 
            activeStyle={{ fontWeight: 'bold' }}
            to='/calendar'>Calendar
          </NavLink>        
          {this.state.token 
            ? <button onClick={this.logout}>Logout</button>
            : <button onClick={'/login'}></button> 
          }
        </header>

        <Switch>
          <Route path="/" exact
            render={routerProps => (
              <Home {...routerProps}/>
            )}
          />

          <Route path="/login" exact
            render={routerProps => (
              <Login handleEmail={this.handleEmail} handleState={this.handleState} handleTokenChange={this.handleTokenChange} {...routerProps}/>
            )}
          />

          <Route path="/contacts" exact
            render={(routerProps) => this.state.token
              ? <Contacts token={this.state.token} {...routerProps} />
              : <Redirect to='/Login' /> } 
            
          />

          <Route path="/details/:id" exact
            render={routerProps => this.state.token
              ? <DetailsPage email={this.state.email} token={this.state.token} oauth={this.state.oauthGoogle} {...routerProps}/>
              : <Redirect to='/Login' />
            }
          />

          <Route path="/create" exact
            render={routerProps => this.state.token
              ? <CreatePage token={this.state.token} {...routerProps}/>
              : <Redirect to='/Login' />
            }
          />
          <Route path="/calendar" exact
            render={routerProps => this.state.token
              ? <CalendarPage email={this.state.email} token={this.state.token} oauth={this.state.oauthGoogle} {...routerProps}/>
              : <Redirect to='/Login' />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

}


