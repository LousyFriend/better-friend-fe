import React, { Component } from 'react';
import { postCalendarEvent } from './calendar-post-request.js';
import { putCalendarEvent } from './calendar-put-request.js';
import { getContactCalendar } from './contact-calendar-get-request.js';
import { putContactCalendar } from './contact-calendar-put-request.js';

export default class CalendarForm extends Component {
  state = {
    startDate: '',
    endDate: '',
    freq: 'WEEKLY;',
    isCalendarEvent: false,
    token: '',
    oauth: '',
    contactId: '',
    name: '',
    eventId: ''
  }
  
  componentDidMount = async () => {
    // Destructure token and contactId from props
    const { token, contactId } = this.props;

    // Retrieves calendar event for calendar (if they exist) and saves to response variable.
    const response = await getContactCalendar(token, contactId);
    // isEvent is attempting to resolve whether or not the response event id exists.

    const isEvent = response[0].event_id 
      ? true 
      : false;

    if (isEvent) {
      this.setState({ eventId: response[0].event_id });
    }

    await this.setState({ isCalendarEvent: isEvent });
  }

  handlePostSubmit = async (e) => {
    e.preventDefault();
    const { token, oauth, contactId, name } = this.props;
    const { startDate, endDate, freq } = this.state;
    
    const noHyphenEndDate = endDate.replace(/-/g, '');
    const noHyphenStartDate = startDate.replace(/-/g, '');

    const body = {
      'end': {
        'date': startDate
      },
      'start': {
        'date': startDate
      },
      'description': 'Now is a great time to keep up with contacts.',
      'recurrence': [
        `RRULE:FREQ=${freq}UNTIL=${noHyphenEndDate}T170000Z`
      ],
      'summary': `Connect with ${name}`,
      'transparency': 'transparent',
      'visibility': 'private',
    };
    
    const response = await postCalendarEvent(token, oauth, body);

    const updateBody = {
      event_id: response.id,
      next_date: noHyphenStartDate
    };

    // This is meant to update our SQL backend
    await putContactCalendar(token, contactId, updateBody);

    this.setState({ freq: 'WEEKLY;', isCalendarEvent: true, eventId: response.id });
  }

  handlePutSubmit = async (e) => {
    e.preventDefault();
    const { token, oauth, contactId, name } = this.props;
    const { startDate, endDate, freq, eventId } = this.state;
     
    const noHyphenEndDate = endDate.replace(/-/g, '');
    const noHyphenStartDate = startDate.replace(/-/g, '');

    const body = {
      'end': {
        'date': startDate
      },
      'start': {
        'date': startDate
      },
      'description': 'Now is a great time to keep up with contacts.',
      'recurrence': [
        `RRULE:FREQ=${freq}UNTIL=${noHyphenEndDate}T170000Z`
      ],
      'summary': `Connect with ${name}`,
      'transparency': 'transparent',
      'visibility': 'private',
    };
    
    const response = await putCalendarEvent(token, oauth, eventId, body);

    const updateBody = {
      event_id: response.id,
      next_date: noHyphenStartDate
    };

    // This is meant to update our SQL backend
    await putContactCalendar(token, contactId, updateBody);

    this.setState({ freq: 'WEEKLY;' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.state.isCalendarEvent ? this.handlePutSubmit : this.handlePostSubmit}>
          <label>
            Start Date
            <input type="date" onChange={(e) => this.setState({ startDate: e.target.value })} required></input>
          </label>
          <label>
            End Date
            <input type="date" onChange={(e) => this.setState({ endDate: e.target.value })} required></input>
          </label>
          <label>
            Frequency
            <select onChange={e => this.setState({ freq: e.target.value })} required>
              <option value="WEEKLY;"> Every Week</option>
              <option value="WEEKLY;INTERVAL=2;">Every 2 Weeks</option>
              <option value="MONTHLY;">Every Month</option>
              <option value="MONTHLY;INTERVAL=2;">Every 2 Months</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
