import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getCommentsById from './get-comments-utils.js';
import getContactById from './get-contact-utils.js';

export default class DetailsPage extends Component {
    state ={
      comments: [],
      contact_data: [],
      isLoading: true
    }

    componentDidMount = async () => {
      try {
        await this.setState({ isLoading: true });
        // Grabs contact_id from the react-router-dom url params.
        const id = Number(this.props.match.params.id);
    // grabs token
        const { token } = this.props;

    // async make get request for contact data (contact info + social media)
        const contactData = await getContactById(token, id);
        console.log('contact data', contactData);
    // async place in state'
        await this.setState({ contact_data: contactData });
      
      
    // async make get request for comment data (comments)
        const commentsData = await getCommentsById(token, id);
        console.log('comments data', commentsData);

    // async place in state
        await this.setState({ comments: commentsData });
        await this.setState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }

    render() {
    //   const { contact_data } = this.state;
      return (
        <>
          {/* ternary here to check if editSwitch is true or false. If true,  */}
          { this.state.isLoading ?
            <p>Loading Icon Placeholder</p> :
            this.state.contact_data.map(obj => {
              return (
                <div>
                  <p>{obj.name}</p>
                  <p>{obj.job_title}</p>
                  <img src={obj.image_url} alt='contact' />
                  <p>{obj.interests}</p>
                  <p>{obj.contact_category}</p>
                  <p>{obj.phone}</p>
                  <Link to={`${obj.linked_in}`}>LinkedIn</Link>
                  <Link to={`${obj.facebook}`}>Facebook</Link>
                  <Link to={`${obj.gmail}`}>Gmail</Link>
                  <Link to={`${obj.twitter}`}>Twitter</Link>
                  <Link to={`${obj.github}`}>Github</Link>
                  <Link to={`${obj.personal_site}`}>Personal Site</Link> 
                </div>
              );
            })
          }
        </>
      );
    }
}
