import React, { Component } from 'react'

export default class CommentItem extends Component {
    // Still needs:
    //  - Timestamp?
    //  - A delete/edit button in li jsx which makes a DELETE/PUT request.
    //      - Will require token from props. 
    //      - Will require retrieveComments function from comment section too.
    
  render() {
    //   Grab comment data from props to create list item.
    const { commentData } = this.props;
    return (
      <li>
        {/* <p>{commentData.timestamp}</p> */}
        <p>{commentData.details}</p>
      </li>
    );
  }
}