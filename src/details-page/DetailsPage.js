import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentSection from './components/CommentSection.js';
import getContactById from './get-contact-utils.js';

export default class DetailsPage extends Component {
    state ={
      comments: [],
      contact_data: [],
      isLoading: true
    }

    componentDidMount = async () => {
      try {
        // set isLoading state to true.
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
        // set isLoading state to false.
        await this.setState({ isLoading: false });

      } catch (error) {
        console.log(error);
      }
    }

    render() {
      const { token } = this.props;
      const { isLoading, contact_data } = this.state;
      return (
        <>
          {/* ternary here to check if editSwitch is true or false. If true,  */}
          { isLoading ?
            <p>Loading Icon Placeholder</p> :
            contact_data.map(obj => {
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

          <CommentSection 
            token = { token }
          />

        </>
      );
    }
}
