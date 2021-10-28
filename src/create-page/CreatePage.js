import React, { Component } from 'react';
import postContact from './create-page-utils.js';

// a little util Component like this might be nice (in a separate file, but written here to make it easier to grok)
function Input({ name, handler }) {
  return  <label class="m-3 text-black font-bold">
    {name}
    <input class="bg-white text-black ml-3 rounded-md" onChange={handler} type='text'></input>
  </label>
}

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
    
    // this weird "function that returns a function" might add some worthwhile DRYness. Note that it takes in a key and returns a function that takes in an event, which is the function signature we want in an event handler
    makeChangeHandler = key => e => this.setState({ [key]: e.target.value });

    render() {
      return (
        <div class="bg-white w-screen h-screen flex items-center justify-center my-5">
          <form class="flex flex-col items-center justify-center bg-betterFriendOrange p-3 rounded-xl text-md lg:text-4xl h-auto" onSubmit={this.handleFormSubmit}>
            <Input name='Name' handler={this.makeChangeHandler('name')} />
            <Input name='Job Title' handler={this.makeChangeHandler('job_title')} />
            <Input name='Image URL' handler={this.makeChangeHandler('image_url')} />
            <Input name='Interests' handler={this.makeChangeHandler('interests')} />
            <label class="m-3 text-black font-bold">
                Contact Category
              <select 
                onChange={this.makeChangeHandler('contact_category')} 
                class="bg-white text-black ml-3 rounded-md p-1" 
                required>
                  <option value="" selected disabled hidden>Choose here</option>
                  <option value='Personal'>Personal</option>
                  <option value='Professional'>Professional</option>
                  <option value='Family'>Family</option>
                  <option value='Other'>Other</option>
              </select>
            </label>
            <Input name='LinkedIn' handler={this.makeChangeHandler('linked_in')} />
            <Input name='Facebook' handler={this.makeChangeHandler('facebook')} />
            <Input name='Gmail' handler={this.makeChangeHandler('gmail')} />
            <Input name='Phone' handler={this.makeChangeHandler('phone')} />
            <Input name='Twitter' handler={this.makeChangeHandler('twitter')} />
            <Input name='Github' handler={this.makeChangeHandler('github')} />
            <Input name='Personal Site' handler={this.makeChangeHandler('personal_site')} />
            <button class="bg-black text-white p-3 m-2 rounded-xl font-bold">Create Contact</button>
          </form>
        </div>
      );
    }
}
