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
  
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink
            exact className='links'
            activeStyle={{ fontSize:'1.5rem' }}
            to='/'>Home
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
              <Login handleState={this.handleState} handleTokenChange={this.handleTokenChange} {...routerProps}/>
            )}
          />
          <Route path="/contacts" exact={true}
            render={(routerProps) => this.state.token
              ? <Contacts token={this.state.token} {...routerProps} />
              : <Redirect to='/Login' /> } 
            
          />
          <Route path="/details/:id" exact={true}
            render={routerProps => (
              <DetailsPage token={this.state.token} {...routerProps}/>
            )}
          />
          <Route path="/create" exact={true}
            render={routerProps => (
              <CreatePage token={this.state.token} {...routerProps}/>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

}


