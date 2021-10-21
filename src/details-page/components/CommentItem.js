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
      <li class='flex box-border border-2 h-32 p-4 border-black relative shadow-lg'>
        {/* <p>{commentData.timestamp}</p> */}
        <p class='w-full text-center'>{commentData.comment}</p>
        <button onClick={this.handleDeleteComment} class='absolute right-3 top-3'>❌</button>

      </li>
    );
  }
}