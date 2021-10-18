import { Component } from 'react';
import Home from './home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Contacts from './contacts/Contacts.js';
import DetailsPage from './details-page/DetailsPage.js';
import CreatePage from './create-page/CreatePage.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />
              <Route path="/login" exact={true}
                render={routerProps => (
                  <Login {...routerProps}/>
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

export default App;
