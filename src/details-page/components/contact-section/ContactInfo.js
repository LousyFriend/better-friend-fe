import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


export default class ContactInfo extends Component {
  render() {

    // Destructure everything from props object
    const { object } = this.props;
    const { contact_id, name, job_title, image_url, interests, contact_category, phone, linked_in, facebook, gmail, twitter, github, personal_site } = object;

    return (
      <div key = {contact_id} class='flex flex-col justify-center text-center'>

        {
          image_url === null || image_url === undefined || image_url === ''
            ? <img class='object-none m-auto' src='/blank-avatar.jpg' alt='blank avatar'/>
            : <img class='object-none m-auto' src={ image_url } alt='blank avatar' />
        }

        <p class='text-4xl'>{name}</p>

        <p class='text-lg'>{job_title}</p>

        <p><span class='font-roboMono font-bold'>Interests:</span> {interests}</p>

        <p><span class='font-roboMono font-bold'>Contact Category</span> {contact_category}</p>

        <div class='flex flex-wrap h-14 justify-around items-center'>
          { phone && <a href={phone}>Phone</a> }
          {/* ❗ THESE LINKS AREN'T WORKING */}
          { linked_in && <a href={linked_in} rel="noopener noreferrer" target='_blank' >LinkedIn</a> }
          { facebook && <a href={facebook} rel="noopener noreferrer" target='_blank' >Facebook</a> }
          { gmail && <a href={gmail} rel="noopener noreferrer" target='_blank' >Gmail</a> }
          { twitter && <a href={twitter} rel="noopener noreferrer" target='_blank' >Twitter</a> }
          { github && <a href={github} rel="noopener noreferrer" target='_blank' >Github</a> }
          { personal_site && <a href={personal_site} rel="noopener noreferrer" target='_blank' >personal_site</a> }
        </div>

      </div>
    );
  }
}

