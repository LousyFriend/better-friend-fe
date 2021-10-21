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
import CalendarPage from './calendar-page/CalendarForm.js';
import CalendarForm from './calendar-page/CalendarForm.js';
const TOKEN = 'TOKEN';

export default class App extends Component {
state = {
  token: localStorage.getItem(TOKEN) || '',
  oauthGoogle: ''
}

handleState = (oauthGoogle) => {
  this.setState({ oauthGoogle: oauthGoogle });
  
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
  console.log(this.state.oauthGoogle);
  return (
    <div className="App">
      <Router>
        <header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'black', color: 'white' }}>
          <NavLink
            exact className='links'
            activeStyle={{ fontSize:'1.5rem' }}
            to='/'>Home
          </NavLink>        
          <NavLink
            exact className='links'
            activeStyle={{ fontSize:'1.5rem' }}
            to='/contacts'>Contacts
          </NavLink>        
          <NavLink
            exact className='links'
            activeStyle={{ fontSize:'1.5rem' }}
            to='/create'>Create
          </NavLink>        
          <NavLink
            exact className='links'
            activeStyle={{ fontSize:'1.5rem' }}
            to='/calendar'>Calendar
          </NavLink>        
          {this.state.token && <button onClick={this.logout}>Logout</button>}
          
        </header>
        <Switch>
          <Route path="/" exact
            render={routerProps => (
              <Home {...routerProps}/>
            )}
          />
          <Route path="/login" exact
            render={routerProps => (
              <Login handleState={this.handleState} handleTokenChange={this.handleTokenChange} {...routerProps}/>
            )}
          />
          <Route path="/contacts" exact
            render={(routerProps) => this.state.token
              ? <Contacts token={this.state.token} {...routerProps} />
              : <Redirect to='/Login' /> } 
            
          />
          <Route path="/details/:id" exact
            render={routerProps => this.state.token
              ? <DetailsPage token={this.state.token} oauth={this.state.oauthGoogle} {...routerProps}/>
              : <Redirect to='/Login' />
            }
          />
          <Route path="/create" exact
            render={routerProps => this.state.token
              ? <CreatePage token={this.state.token} {...routerProps}/>
              : <Redirect to='/Login' />
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

}


