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
// import { login } from './fetch-utils';
const TOKEN = 'TOKEN';

export default class App extends Component {
state = {
  token: '',
  oauthGoogle: ''
}

handleState = (oauthGoogle) => {
  this.setState({ oauthGoogle: oauthGoogle });
  // , email: email, password: password
} 
handleTokenChange = async (token) => {
  localStorage.setItem(TOKEN, token);
  await this.setState({ token: token });
  console.log('slkdjflkdsjfk');
}
// createLogin = (email, password) => {
//   const { token } = login(email, password);
//   console.log(token);

// createLocalToken = () => {
//   // const token = login(this.state.email, this.state.password);
//   localStorage.setItem(TOKEN, token);
//   console.log(token);
//   this.setState(token);
// }


render() {
  console.log(this.state.oauthGoogle, this.state.token);
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
            to='/login'>!
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
              <CreatePage token={this.state.token} {...routerProps}/>
            )}
          />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

}


