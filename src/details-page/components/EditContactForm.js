import React, { Component } from 'react';
import deleteContact from '../delete-contact-utils.js';
import putContact from '../put-contact-utils.js';
// import postContact from './create-page-utils.js';

export default class CreatePage extends Component {
    state={
      name: '',
      job_title: '',
      image_url: '',
      interests: '',
      contact_category: '',
      linked_in: '',
      facebook: '',
      gmail: '',
      phone: '',
      twitter: '',
      github: '',
      personal_site: ''
    }

    // Goal of this component:
    // Create a form that can be used in detailed page.
    //  - ✔ Has controlled inputs
    //      - ✔ Needs contactData from props
    //      - ✔ Await Set state with contactData on async componentDidMount.
    //      - ✔ Each input has a value attribute assigned to the appropriate state property.
    //      - ✔ Each input manipulates state.
    //  - ✔ Needs a function from props which can be called to hit the editSwitch and reload updated contact info and pass it down to the form again. 

    componentDidMount = async () => {
      const { contactDataObj } = this.props;

      await this.setState({ ...contactDataObj });

    }

    handleFormSubmit = async (e) => {
    // prevent form defaults
      e.preventDefault();

    // destructure token from props.
      const { token, flipEditSwitch, contact_id, retrieveContactData } = this.props;

    // call put function here and pass it the state obj & token
      await putContact(token, contact_id, this.state);

      retrieveContactData();

    // call flipEditSwitch
      flipEditSwitch();

    // 🟡 call retrieveContactData here if contact data doesn't update on details page after the edit switch is flipped above on line ~48 
    }

    handleDeleteClick = async () => {

      // destructure token and contact_id from props.
      const { token, contact_id } = this.props;

      // prompts user to confirm deletion.
      // eslint-disable-next-line no-restricted-globals
      const confirmDelete = confirm('Deleting contacts is permanent. Are you sure?');

      // if user canceled stop.
      if (!confirmDelete) return;
      
      // if user didn't cancel delete the contact.
      await deleteContact(token, contact_id);

      // ❗ NOT WORKING - redirect user to detailspage/:id
      // this.props.history.push('/contacts');
    }
    
    render() {
      console.log('contact data in state at time of form render', this.state);
      const { name, job_title, image_url, interests, contact_category, phone, linked_in, facebook, gmail, twitter, github, personal_site } = this.state;
      return (
        <>
          <form onSubmit={this.handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <label>
                Name
              <input value={name} onChange={async (e) => await this.setState({ name: e.target.value })} type='text' required></input>
            </label>

            <label>
                Job Title
              <input value={job_title} onChange={async (e) => await this.setState({ job_title: e.target.value })} type='text' required></input>
            </label>

            <label>
                Image URL
              <input value={image_url} onChange={async (e) => await this.setState({ image_url: e.target.value })} type='text'></input>
            </label>

            <label>
                Interests
              <input value={interests} onChange={async (e) => await this.setState({ interests: e.target.value })} type='text'></input>
            </label>

            <label>
                Contact Category
              <select value={contact_category} onChange={async (e) => await this.setState({ contact_category: e.target.value })} required>
                <option value='Personal'>Personal</option> 
                <option value='Professional'>Professional</option> 
                <option value='Family'>Family</option> 
                <option value='Other'>Other</option> 
              </select>
            </label>

            <label>
                LinkIn
              <input value={linked_in} onChange={async (e) => await this.setState({ linked_in: e.target.value })} type='text'></input>
            </label>

            <label>
                Facebook
              <input value={facebook} onChange={async (e) => await this.setState({ facebook: e.target.value })} type='text'></input>
            </label>

            <label>
                Gmail
              <input value={gmail} onChange={async (e) => await this.setState({ gmail: e.target.value })} type='text'></input>
            </label>

            <label>
                Phone #
              <input value={phone} onChange={async (e) => await this.setState({ phone: e.target.value })} type='text'></input>
            </label>

            <label>
                Twitter
              <input value={twitter} onChange={async (e) => await this.setState({ twitter: e.target.value })} type='text'></input>
            </label>

            <label>
                Github
              <input value={github} onChange={async (e) => await this.setState({ github: e.target.value })} type='text'></input>
            </label>

            <label>
                Personal Site
              <input value={personal_site} onChange={async (e) => await this.setState({ personal_site: e.target.value })} type='text'></input>
            </label>

            <button>Edit Contact</button>
          </form>
          <button onClick={this.handleDeleteClick}>❌</button>
        </>
      );
    }
}