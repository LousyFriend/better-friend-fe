import { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <Link
          to='/login'> Login or Signup
        </Link>
      </div>
    );
  }

}