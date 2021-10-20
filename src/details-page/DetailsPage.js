import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DetailsPage extends Component {
    start ={
      comments: [],
      contact_data: []
    // editSwitch: false;
    }

    componentDidMount = async () => {
        // Grabs contact_id from the react-router-dom url params.
        //   const contactId = this.props.match.params.contact_id;

        // async make get request for contact data (contact info + social media)
        // async place in state

        // async make get request for comment data (comments)
        // async place in state
    }

    render() {
      const { contact_data } = this.state;
      return (
        <>
          {/* ternary here to check if editSwitch is true or false. If true,  */}
          {
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
        </>
      );
    }
}
