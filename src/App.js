import { Component } from 'react';
import Home from './home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
  // Redirect
} from 'react-router-dom';
import './App.css';
import Login from './login/Login.js';
import Contacts from './contacts/Contacts.js';
import DetailsPage from './details-page/DetailsPage.js';
import CreatePage from './create-page/CreatePage.js';
const TOKEN = 'TOKEN';

export default class App extends Component {
state = {
  token: localStorage.getItem(TOKEN) || '',
  oauthGooogle: ''

}
handleTokenChange = async (token) => {
  localStorage.setItem(TOKEN, token);
  this.setState({ token: token });
  
}

handleOauth = async (oauthGoogle) => {
  this.setState({ oauthGooogle: oauthGoogle });
}
render() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink
            exact className='links'
            activeStyle={{ fontSize:'1.5rem' }}
            to='/'>Home
          </NavLink>
          <NavLink
            exact className='links'
            activeStyle={{ fontSize:'1.5rem' }}
            to='/login'>Login
          </NavLink>
          {this.state.token && <button onClick={this.logout}>Logout</button>}
        </header>
        <Switch>
          <Route path="/" exact={true}
            render={routerProps => (
              <Home {...routerProps}/>
            )}
          />
          <Route path="/login" exact={true}
            render={routerProps => (
              <Login handleTokenChange={this.handleTokenChange} handleOauth={this.handleOauth} {...routerProps}/>
            )}
          />
          <Route path="/contacts" exact={true}
            render={routerProps => (
              <Contacts {...routerProps}/>
            )}
          />
          <Route path="/details/:id" exact={true}
            render={routerProps => (
              <DetailsPage {...routerProps}/>
            )}
          />
          <Route path="/create" exact={true}
            render={routerProps => (
              <CreatePage {...routerProps}/>
            )}
          />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

}


