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

        <div class='flex flex-wrap h-14 justify-around'>
          { phone && <a href={phone}>Phone</a> }
          {/* ❗ THESE LINKS AREN'T WORKING */}
          { linked_in && <a class='align-center text-center' href={linked_in}>LinkedIn</a> }
          { facebook && <a href={`${facebook}`}>Facebook</a> }
          { gmail && <a href={`${gmail}`}>Gmail</a> }
          { twitter && <a href={`${twitter}`}>Twitter</a> }
          { github && <a href={`${github}`}>Github</a> }
          { personal_site && <a href={`${personal_site}`}>personal_site</a> }
        </div>

      </div>
    );
  }
}

