
import React, { Component } from 'react';
import { getContacts } from './contacts-request.js';
import ContactCard from './ContactCard.js';


export default class Contacts extends Component {
  state = {
    contactList: []
  }

  componentDidMount = async () => {
    const { token } = this.props;
    const contacts = await getContacts(token);
    

    await this.setState({ contactList: contacts });
  };

  render() {
    const { contactList } = this.state;

    return (
      <div class='grid grid-cols-1 sm:grid-cols-2 gap-6 bg-betterFriendOrange'>
        
        {
          contactList.map(contact => <ContactCard {...contact}/>)
        }
        
      </div>
    );
  }
}
