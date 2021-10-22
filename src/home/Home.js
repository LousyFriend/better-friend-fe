import { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home" class='h-screen w-screen flex justify-center bg-betterFriendOrange'>
        <Link to='/login'> 
          <img src='BetterFriend-logos.jpeg' alt='better friend logo'/>
        </Link>

      </div>
    );
  }

}