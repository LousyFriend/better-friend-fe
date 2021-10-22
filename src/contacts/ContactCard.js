import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export default class ContactCard extends Component {
  render() {
    const { id, name, job_title, image_url, gmail, phone, linked_in } = this.props;
    return (
      <Link to={`/details/${id}`} style={{ margin: '30px' }}>
        {
          <div class='w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row lg:justify-center h-full'>
            <div class='w-screen md:w-1/2 align-left p-4 flex-1 md:p-10 m-0 grid grid-cols-1 h-auto justify-start'>
              {
                image_url === null || image_url === undefined || image_url === ''
                  // ? <img src={`${process.env.PUBLIC_URL}/assets/blank-avatar.jpg`} alt='blank avatar' width='300px' height='200px'/>
                  ? <img class='object-left rounded-lg object-cover w-60 h-80% ' src='blank-avatar.jpg' alt='blank avatar'/>
                  : <img class='object-center rounded-lg object-cover w-60 h-full' src={ image_url } alt='blank avatar'></img>
              }
            </div>
            <section class='flex flex-row p-4'>
              <div class='text-right'>{ name }</div>
              <div class='text-right'>{ job_title }</div>
            </section>
            <footer class='flex justify-self-end'>
              <div>{ gmail }</div>
              <div>{ phone }</div>
              <div>{ linked_in }</div>
            </footer> 
          </div>
        }
        {/* name, job title last contacted email phone linkedin */}
      </Link>
    );
  }
}
