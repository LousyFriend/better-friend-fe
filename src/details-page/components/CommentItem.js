import React, { Component } from 'react';
import deleteComment from '../delete-comment-utils.js';

export default class CommentItem extends Component {
    
    
  render() {
    //   Grab comment data from props to create list item.
    const { commentData, token, key } = this.props;
    return (
      <li>
        {/* <p>{commentData.timestamp}</p> */}
        <p>{commentData.comment}</p>
        <button onClick={() => deleteComment(token, key)}></button>

      </li>
    );
  }
}