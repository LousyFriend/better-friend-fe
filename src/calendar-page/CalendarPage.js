import React, { Component } from 'react';

export default class CalendarPage extends Component {
  render() {
    {/* might be nice to add newlines for maintainability on these params */}
    const URL = `
    https://calendar.google.com/calendar/embed
      ?height=200
      &wkst=1
      &bgcolor=%23ffffff
      &ctz=America%2FLos_Angeles
      &src=${this.props.email}
      &color=%23039BE5
    `;

    return (
      <div class="w-screen h-screen">
        <iframe title='calendar' src={URL} width="100%" height="100%" frameborder="5%" scrolling="no"></iframe>
      </div>
    );
  }
}
