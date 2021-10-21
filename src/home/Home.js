import { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <Link to='/login'><img src='blank-avatar.jpg' alt='better friend logo'/>   </Link>

      </div>
    );
  }

}