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
    name: ''
  }
  
  componentDidMount = async () => {
    // Destructure token and contactId from props
    const { token, contactId } = this.props;
    // Retrieves contacts(if the exist) and saves to response variable.
    const response = await getContactCalendar(token, contactId);
    // isEvent is attempting to resolve wether or not the response event id exists.
    const isEvent = response[0].event_id 
      ? true 
      : false;

    await this.setState({ isCalendarEvent: isEvent });

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { token, oauth, contactId, name } = this.props;
    const { startDate, endDate, freq, isCalendarEvent } = this.state;
    
    // Totally tubular dude! Look at that regex tho!!!!
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

    console.log(isCalendarEvent);

    // This decides wether we make a put or post request to google.
    const response = await isCalendarEvent 
      ? putCalendarEvent(token, oauth, contactId, body)
      : postCalendarEvent(token, oauth, body);

    const updateBody = {
      event_id: response.id,
      next_date: noHyphenStartDate
    };

    await putContactCalendar(token, contactId, updateBody);

    this.setState({ freq: 'WEEKLY;' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Start Date
            <input type="date" onChange={(e) => this.setState({ startDate: e.target.value })} required value={this.state.startDate}></input>
          </label>
          <label>
            End Date
            <input type="date" onChange={(e) => this.setState({ endDate: e.target.value })} required value={this.state.startDate}></input>
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
