import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export default class ContactCard extends Component {
  render() {
    const { id, name, job_title, image_url, gmail, phone, linked_in } = this.props;
    return (
      <Link to={`/details/${id}`} style={{ margin: '30px' }}>
        {
          <div class='w-full bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row lg:justify-center h-full'>
            <div class='w-screen md:w-1/2 align-left p-4 flex-1 md:p-10 m-0 grid grid-cols-1 h-auto justify-start relative'>
              {
                image_url === null || image_url === undefined || image_url === ''
                  ? <img class='object-left rounded-lg object-cover w-60 h-80% absolute left-2 top-2 ' src='blank-avatar.jpg' alt='blank avatar'/>
                  : <img class='object-center rounded-lg object-cover w-60 h-full absolute left-2 top-2' src={ image_url } alt='blank avatar'></img>
              }
            
              <div class='relative text-xs'>
                <section class='flex flex-col p-4 absolute right-8'>
                  <div class='text-right'>{ name }</div>
                  <div class='text-right'>{ job_title }</div>
                </section>
                <footer class='flex flex-row absolute right-1 bottom-0'>
                  <div>{ gmail } <img class='h-50% w-5%' src='Gmail_Icon.svg' alt='gmail'/> </div>
                  <div>{ phone }<img class='h-2 w-2' src='phone.svg' alt='telephone'/> </div>
                  <div>{ linked_in }<img class='h-5 w-5' src='Linkedin.png' alt='linked in'/></div>
                </footer> </div></div>
          </div>
        }
        {/* name, job title last contacted email phone linkedin */}
      </Link>
    );
  }
}
