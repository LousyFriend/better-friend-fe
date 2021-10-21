import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CommentSection from './components/CommentSection.js';
import ContactInfo from './components/ContactInfo.js';
import EditContactForm from './components/EditContactForm.js';
import getContactById from './get-contact-utils.js';

export default class DetailsPage extends Component {
    state ={
      contact_data: [],
      isLoading: true,
      editSwitch: false
    }

    retrieveContactData = async () => {
      // Grabs contact_id from the react-router-dom url params.
      const contact_id = Number(this.props.match.params.id);
      // grabs token
      const { token } = this.props;

      // async make get request for contact data (contact info + social media)
      const contactData = await getContactById(token, contact_id);
      console.log('contact data', contactData);

      // async place in state'
      await this.setState({ contact_data: contactData });
    }

    componentDidMount = async () => {
      try {
        // set isLoading state to true.
        await this.setState({ isLoading: true });
       
        // call retrieveContactData
        await this.retrieveContactData();

        // set isLoading state to false.
        await this.setState({ isLoading: false });

      } catch (error) {
        console.log(error);
      }
    }

    flipEditSwitch = async () => {
      await this.setState({ editSwitch: !this.state.editSwitch });
    }

    render() {
      const { token } = this.props;
      const { isLoading, contact_data, editSwitch } = this.state;
      console.log('testing if we need to turn this id into a number', typeof this.props.match.params.id);
      const contact_id = Number(this.props.match.params.id);

      // Determines what to display to page based on editSwitch state
      // https://reactjs.org/docs/conditional-rendering.html
      let display;
      !editSwitch ?
        display = 
        <div>
          {contact_data.map(obj => < ContactInfo object = { obj } key = { obj.id } />)}
          <button onClick={this.flipEditSwitch}>EDIT BUTTON</button>
        </div> 
        :
        display = 
        <EditContactForm 
          token = { token } 
          contactDataObj = { contact_data[0] } 
          retrieveContactData = {this.retrieveContactData}
          flipEditSwitch = { this.flipEditSwitch } 
          contact_id = { contact_id }
        />;

      return (
        <>
          {/* <button onClick={() => this.setState({ editSwitch: !this.state.editSwitch })}>Edit</button> */}
          

          { 
            isLoading ?
              <p>Loading Icon Placeholder</p> :
              display
          }

          <CommentSection 
            token = { token }
            contact_id = { contact_id }
          />

        </>
      );
    }
}
