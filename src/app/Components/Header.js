import { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component {

  render() { 
    return (
      <header className="Header">
        <Link to='/login'> To Login Page </Link>
        <h1>React App</h1>
        
      </header>
    );
  }

}
 
export default Header;