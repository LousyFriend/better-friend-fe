import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export default class ContactCard extends Component {
  render() {
    const { id, name, job_title, image_url, gmail, phone, linked_in } = this.props;
    return (
      <Link to={`/details/${id}`} style={{ margin: '30px' }}>
        {
          <div class='bg-red-100'>
            <div class='w-screen'>
              {
                image_url === null || image_url === undefined || image_url === ''
                  // ? <img src={`${process.env.PUBLIC_URL}/assets/blank-avatar.jpg`} alt='blank avatar' width='300px' height='200px'/>
                  ? <img class='object-contain' src='blank-avatar.jpg' alt='blank avatar' width='300px' height='200px'/>
                  : <img src={ image_url }alt='blank avatar'></img>
              }
            </div>
            <h1>{ name }</h1>
            <div>{ job_title }</div>
            <div>{ gmail }</div>
            <div>{ phone }</div>
            <div>{ linked_in }</div>
          </div>
        }
        {/* name, job title last contacted email phone linkedin */}
      </Link>
    );
  }
}
