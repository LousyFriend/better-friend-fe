import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContactInfo extends Component {
  render() {
    const { object } = this.props;
    const { contact_id, name, job_title, image_url, interests, contact_category, phone, linked_in, facebook, gmail, twitter, github, personal_site } = object;
    return (
      <div key = {contact_id}>
        <p>{name}</p>
        <p>{job_title}</p>
        <img src={image_url} alt='contact' />
        <p>{interests}</p>
        <p>{contact_category}</p>
        <p>{phone}</p>
        {/* ❗ THESE LINKS AREN'T WORKING 
            - Should this be its own section/component?
        */}
        <Link to={linked_in}>LinkedIn</Link>
        <Link to={`${facebook}`}>Facebook</Link>
        <Link to={`${gmail}`}>Gmail</Link>
        <Link to={`${twitter}`}>Twitter</Link>
        <Link to={`${github}`}>Github</Link>
        <Link to={`${personal_site}`}>Personal Site</Link> 
      </div>
    );
  }
}

