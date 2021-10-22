import React, { Component } from 'react';
import postContact from './create-page-utils.js';

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

    handleFormSubmit = async (e) => {
    // prevent form defaults
      e.preventDefault();

    // destructure token from props.
      const { token } = this.props;

    // call post function here and pass it the state obj save returning info to variable
      console.log('state before post', this.state);
      const newContactDataObj = await postContact(token, this.state);

      console.log(newContactDataObj);

    // munge data and grab the contact id
      const newContactIdInt = newContactDataObj.contactData.id;

      console.log('new contact id', newContactIdInt);
    // redirect user to detailspage/:id
      this.props.history.push(`/details/${newContactIdInt}`);
    }
    
    render() {
      return (
        <div class="bg-white w-screen h-screen flex items-center justify-center my-5">
          <form class="flex flex-col items-center justify-center bg-betterFriendOrange p-3 rounded-xl text-md lg:text-4xl h-auto" onSubmit={this.handleFormSubmit}>
            <label class="m-3 text-black font-bold" >
                Name
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ name: e.target.value })} type='text' required></input>
            </label>

            <label class="m-3 text-black font-bold" >
                Job Title
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ job_title: e.target.value })} type='text' required></input>
            </label>

            <label class="m-3 text-black font-bold" >
                Image URL
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ image_url: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold" >
                Interests
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ interests: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Contact Category
              <select onChange={async (e) => await this.setState({ contact_category: e.target.value })} class="bg-white text-black ml-3 rounded-md p-1" required>
                <option value="" selected disabled hidden>Choose here</option>
                <option value='Personal'>Personal</option>
                <option value='Professional'>Professional</option>
                <option value='Family'>Family</option>
                <option value='Other'>Other</option>
              </select>
            </label>

            <label class="m-3 text-black font-bold">
                LinkIn
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ linked_in: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Facebook
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ facebook: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Gmail
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ gmail: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Phone #
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ phone: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Twitter
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ twitter: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Github
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ github: e.target.value })} type='text'></input>
            </label>

            <label class="m-3 text-black font-bold">
                Personal Site
              <input class="bg-white text-black ml-3 rounded-md" onChange={async (e) => await this.setState({ personal_site: e.target.value })} type='text'></input>
            </label>

            <button class="bg-black text-white p-3 m-2 rounded-xl font-bold">Create Contact</button>
          </form>
        </div>
      );
    }
}
