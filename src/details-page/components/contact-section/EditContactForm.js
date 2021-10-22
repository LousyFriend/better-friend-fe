import React, { Component } from 'react';
import deleteContact from './contact-utils/delete-contact-utils.js';
import putContact from './contact-utils/put-contact-utils.js';

// Goal of this component:
// Create a form that can be used in detailed page.
//  - ✔ Has controlled inputs
//      - ✔ Needs contactData from props
//      - ✔ Await Set state with contactData on async componentDidMount.
//      - ✔ Each input has a value attribute assigned to the appropriate state property.
//      - ✔ Each input manipulates state.
//  - ✔ Needs a function from props which can be called to hit the editSwitch and reload updated contact info and pass it down to the form again. 

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


    componentDidMount = async () => {
      // destructure contactDataObj from props.
      const { contactDataObj } = this.props;
      //  set contactDataObj into state.
      await this.setState({ ...contactDataObj });
    }


    handleFormSubmit = async (e) => {
    // prevent form defaults
      e.preventDefault();
    // destructure token from props.
      const { token, flipEditSwitch, contact_id, retrieveContactData } = this.props;
    // call put function here and pass it the state obj & token
      await putContact(token, contact_id, this.state);
    // call retrieveContactData to update the DOM with new data.
      retrieveContactData();
    // call flipEditSwitch to hide the edit form
      flipEditSwitch();
    }


    handleDeleteClick = async () => {
      // destructure token and contact_id from props.
      const { token, contact_id, redirectUser } = this.props;
      // prompts user to confirm deletion.
      // eslint-disable-next-line no-restricted-globals
      const confirmDelete = confirm('Deleting contacts is permanent. Are you sure?');
      // if user canceled stop.
      if (!confirmDelete) return;
      // if user didn't cancel delete the contact.
      await deleteContact(token, contact_id);
      // redirects user to /contacts as there is no longer a contact to display on the details page.
      redirectUser();
    }
    
    render() {

      // Destructure everything out of state!
      const { name, job_title, image_url, interests, contact_category, phone, linked_in, facebook, gmail, twitter, github, personal_site } = this.state;

      return (
        <div class="bg-white w-screen flex flex-col items-center justify-center h-auto">
          <form onSubmit={this.handleFormSubmit} class="flex flex-col items-center border-2 justify-center bg-betterFriendOrange p-3 rounded-xl text-md lg:text-4xl">
            <label class="m-3 text-black font-bold">
                Name
              <input class="bg-white text-black ml-3 rounded-md" value={name} onChange={async (e) => await this.setState({ name: e.target.value })} type='text' required></input>
            </label>

            <label class="m-3 text-black font-bold">
                Job Title
              <input class="bg-white text-black ml-3 rounded-md" value={job_title} onChange={async (e) => await this.setState({ job_title: e.target.value })} type='text' required></input>
            </label>

            <label class="m-3 text-black font-bold">
                Image URL
              <input class="bg-white text-black ml-3 rounded-md" value={image_url} onChange={async (e) => await this.setState({ image_url: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Interests
              <input class="bg-white text-black ml-3 rounded-md" value={interests} onChange={async (e) => await this.setState({ interests: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Contact Category
              <select value={contact_category} onChange={async (e) => await this.setState({ contact_category: e.target.value })} required>
                <option value='Personal'>Personal</option> 
                <option value='Professional'>Professional</option> 
                <option value='Family'>Family</option> 
                <option value='Other'>Other</option> 
              </select>
            </label>

            <label class="m-3 text-black font-bold">
                LinkIn
              <input class="bg-white text-black ml-3 rounded-md" value={linked_in} onChange={async (e) => await this.setState({ linked_in: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Facebook
              <input class="bg-white text-black ml-3 rounded-md" value={facebook} onChange={async (e) => await this.setState({ facebook: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Gmail
              <input class="bg-white text-black ml-3 rounded-md" value={gmail} onChange={async (e) => await this.setState({ gmail: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Phone #
              <input class="bg-white text-black ml-3 rounded-md" value={phone} onChange={async (e) => await this.setState({ phone: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Twitter
              <input class="bg-white text-black ml-3 rounded-md" value={twitter} onChange={async (e) => await this.setState({ twitter: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Github
              <input class="bg-white text-black ml-3 rounded-md" value={github} onChange={async (e) => await this.setState({ github: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Personal Site
              <input class="bg-white text-black ml-3 rounded-md" value={personal_site} onChange={async (e) => await this.setState({ personal_site: e.target.value })} type='text'></input>
            </label>

            <button class="bg-black text-white p-3 m-2 rounded-xl font-bold">Save Contact</button>
            <button class="p-5" onClick={this.handleDeleteClick}>❌</button>
          </form>

        </div>
      );
    }
}