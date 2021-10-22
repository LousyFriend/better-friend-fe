import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContactInfo extends Component {
  render() {

    // Destructure everything from props object
    const { object } = this.props;
    const { contact_id, name, job_title, image_url, interests, contact_category, phone, linked_in, facebook, gmail, twitter, github, personal_site } = object;

    return (
      <div key = {contact_id} class='flex flex-col justify-center text-center'>

        {
          image_url === null || image_url === undefined || image_url === ''
            ? <img src='/blank-avatar.jpg' alt='blank avatar' width='300px' height='200px'/>
            : <img src={ image_url } alt='blank avatar' />
        }

        <p class='text-lg'>{name}</p>

        <p class='text-sm'>{job_title}</p>

        <p>Interests: {interests}</p>

        <p>Contact Category: {contact_category}</p>

        <div class='flex gap-10 justify-center'>
          <p>{phone}</p>
          {/* ❗ THESE LINKS AREN'T WORKING */}
          <Link to={linked_in}>LinkedIn</Link>
          <Link to={`${facebook}`}>Facebook</Link>
          <Link to={`${gmail}`}>Gmail</Link>
          <Link to={`${twitter}`}>Twitter</Link>
          <Link to={`${github}`}>Github</Link>
          <Link to={`${personal_site}`}>Personal Site</Link>
        </div>

      </div>
    );
  }
}

