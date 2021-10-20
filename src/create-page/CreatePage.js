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

    // munge data and grab the contact id
      const newContactIdInt = newContactDataObj.contactData.id;

      console.log('new contact id', newContactIdInt);
    // redirect user to detailspage/:id
      this.props.history.push(`/details/${newContactIdInt}`);
    }
    
    render() {
      return (
        <>
          <form onSubmit={this.handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <label>
                Name
              <input onChange={async (e) => await this.setState({ name: e.target.value })} type='text' required></input>
            </label>

            <label>
                Job Title
              <input onChange={async (e) => await this.setState({ job_title: e.target.value })} type='text' required></input>
            </label>

            <label>
                Image URL
              <input onChange={async (e) => await this.setState({ image_url: e.target.value })} type='text'></input>
            </label>

            <label>
                Interests
              <input onChange={async (e) => await this.setState({ interests: e.target.value })} type='text'></input>
            </label>

            <label>
                Contact Category
              <select onChange={async (e) => await this.setState({ contact_category: e.target.value })} required>
                <option value='Personal'>Personal</option>
                <option value='Professional'>Professional</option>
                <option value='Family'>Family</option>
                <option value='Other'>Other</option>
              </select>
            </label>

            <label>
                LinkIn
              <input onChange={async (e) => await this.setState({ linked_in: e.target.value })} type='text'></input>
            </label>

            <label>
                Facebook
              <input onChange={async (e) => await this.setState({ facebook: e.target.value })} type='text'></input>
            </label>

            <label>
                Gmail
              <input onChange={async (e) => await this.setState({ gmail: e.target.value })} type='text'></input>
            </label>

            <label>
                Phone #
              <input onChange={async (e) => await this.setState({ phone: e.target.value })} type='text'></input>
            </label>

            <label>
                Twitter
              <input onChange={async (e) => await this.setState({ twitter: e.target.value })} type='text'></input>
            </label>

            <label>
                Github
              <input onChange={async (e) => await this.setState({ github: e.target.value })} type='text'></input>
            </label>

            <label>
                Personal Site
              <input onChange={async (e) => await this.setState({ personal_site: e.target.value })} type='text'></input>
            </label>

            <button>Create Contact</button>
          </form>
        </>
      );
    }
}
