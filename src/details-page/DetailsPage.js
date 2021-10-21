import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CommentSection from './components/CommentSection.js';
import ContactInfo from './components/ContactInfo.js';
import EditContactForm from './components/EditContactForm.js';
import getContactById from './get-contact-utils.js';
import CalendarForm from '../calendar-page/CalendarForm.js';

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

      const { token, oauth } = this.props;
      const { isLoading, contact_data, editSwitch } = this.state;

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

          <iframe title='calendar' src={`https://calendar.google.com/calendar/embed?height=200&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=${this.props.email}&color=%23039BE5`} width="350" height="350" frameborder="0" scrolling="no"></iframe>

          { 
            isLoading ?
              <p>Loading Icon Placeholder</p> :
              display
          }
          {
            isLoading
              ? <p>Loading Icon Placeholder</p> 
              : <CalendarForm 
                token = { token }
                oauth = { oauth }
                contactId = { contact_id }
                name = { this.state.contact_data[0].name }
              />
          }
          
          <CommentSection 
            token = { token }
            contact_id = { contact_id }
          />

        </>
      );
    }
}
