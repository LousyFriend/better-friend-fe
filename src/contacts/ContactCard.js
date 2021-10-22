import { Link } from 'react-router-dom';
import React, { Component } from 'react';


export default class ContactCard extends Component {
  render() {
    const { id, name, job_title, image_url, gmail, phone, linked_in } = this.props;
    return (
      <Link to={`/details/${id}`} style={{ margin: '30px' }}>
        {
          <div class='w-auto bg-white rounded-lg shadow-xl flex flex-col md:flex-row lg:justify-center min-h-full md:text-2xl sm:h-full p-6'>
            <div class='w-auto md:w-1/2 align-left p-4 flex-1 md:p-10 m-0 grid grid-cols-2 h-auto justify-start relative'>
              <div>
                {
                  image_url === null || image_url === undefined || image_url === ''
                    ? <img class='object-left rounded-lg object-cover w-1/2 h-80% absolute left-2 top-2 ' src='blank-avatar.jpg' alt='blank avatar'/>
                    : <img class='object-center rounded-lg object-cover w-1/2 h-80% absolute left-2 top-2' src={ image_url } alt='blank avatar'></img>
                }
              </div>
              <div class='p-2 justify-self-end '>
                <section class='flex flex-row p-2 w-1/2 bottom-8 lg:top-6 lg:text-2xl lg:right-0 xl:text-xl m-0'>
                  <div class=''>{ name }</div>
                  <div class=''>{ job_title }</div>
                </section>
                <footer class='flex flex-row justify-self-end '>
                  <div>{ gmail ? <img class='h-5 w-5' src='gmail-icon.png' alt='gmail'/> : '' } </div> 
                  <div>{ phone ? <img class='h-5 w-5' src='phone.png' alt='telephone'/> : '' } </div>
                  <div>{ linked_in ? <img class='h-5 w-5' src='Linkedin.png' alt='linked in'/> : '' } </div>
                </footer> 
              </div>
            </div>
          </div>
        }
        {/* name, job title last contacted email phone linkedin */}
      </Link>
    );
  }
}
