import React, { Component } from 'react';
import deleteComment from '../delete-comment-utils.js';

export default class CommentItem extends Component {

  handleDeleteComment = async () => {
    const { commentData, token, retrieveComments } = this.props;
    await deleteComment(token, Number(commentData.comment_id));
    await retrieveComments();
  }
    
    
  render() {
    //   Grab comment data from props to create list item.
    const { commentData } = this.props;
    console.log('comment data from props on comment render', commentData);
    return (
      <li style={{ display: 'flex', gap: '10px' }}>
        {/* <p>{commentData.timestamp}</p> */}
        <p>{commentData.comment}</p>
        <button onClick={this.handleDeleteComment}>Delete Comment</button>

      </li>
    );
  }
}