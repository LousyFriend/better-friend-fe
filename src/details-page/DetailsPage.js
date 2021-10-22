import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CommentSection from './components/comment-section/CommentSection.js';
import ContactInfo from './components/contact-section/ContactInfo.js';
import EditContactForm from './components/contact-section/EditContactForm.js';
import getContactById from './components/contact-section/contact-utils/get-contact-utils.js';
import CalendarForm from '../calendar-page/CalendarForm.js';

export default class DetailsPage extends Component {
    state ={
      contact_data: [],
      isLoading: true,
      editSwitch: false
    }

    retrieveContactData = async () => {
      // Grabs contact_id from the react-router-dom url params
      const contact_id = Number(this.props.match.params.id);
      // destructures token from props
      const { token } = this.props;
      // async make get request for contact data (contact info + social media)
      const contactData = await getContactById(token, contact_id);

      // async place in state'
      await this.setState({ contact_data: contactData });
    }

    componentDidMount = async () => {
      try {
        // set isLoading state to true
        await this.setState({ isLoading: true });
        // call retrieveContactData
        await this.retrieveContactData();
        // set isLoading state to false
        await this.setState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }

    redirectUser = () => {
      // pushes user to contacts page. This must live here because the component in which it is used is not mounted
      this.props.history.push('/contacts');
    }

    flipEditSwitch = async () => {
      // flips the editSwitch state value
      await this.setState({ editSwitch: !this.state.editSwitch });
    }

    render() {
      // Destructures everything!!!
      const { token, oauth } = this.props;
      const { isLoading, contact_data, editSwitch } = this.state;
      const contact_id = Number(this.props.match.params.id);

      // Determines what to display to page based on editSwitch state
      // https://reactjs.org/docs/conditional-rendering.html
      let display;
      !editSwitch
        ? display = 
        <div class='relative md:w-1/2 m-auto'>
          <img onClick={this.flipEditSwitch} alt='edit button' src='https://www.freeiconspng.com/uploads/edit-new-icon-22.png' class='absolute bottom-36 right-1 h-5 z-10'/>
          {contact_data.map(obj => < ContactInfo object = { obj } key = { obj.id } />)}
        </div> 
        : display = 
        <EditContactForm 
          token = { token } 
          contactDataObj = { contact_data[0] } 
          retrieveContactData = {this.retrieveContactData}
          flipEditSwitch = { this.flipEditSwitch } 
          contact_id = { contact_id }
          redirectUser = { this.redirectUser }
        />;

      return (
        <div class='flex flex-col justify-center'>


          { 
            isLoading 
              ? <p>Loading Icon Placeholder</p> 
              : display
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

        </div>
      );
    }
}
