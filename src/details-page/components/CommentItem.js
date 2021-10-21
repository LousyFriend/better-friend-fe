import React, { Component } from 'react';
import deleteComment from '../delete-comment-utils.js';

export default class CommentItem extends Component {
    
    
  render() {
    //   Grab comment data from props to create list item.
    const { commentData, token } = this.props;
    console.log('comment data from props', commentData);
    return (
      <li style={{ display: 'flex', gap: '10px' }}>
        {/* <p>{commentData.timestamp}</p> */}
        <p>{commentData.comment}</p>
        <button onClick={() => deleteComment(token, commentData.comment_id)}>Delete Comment</button>

      </li>
    );
  }
}