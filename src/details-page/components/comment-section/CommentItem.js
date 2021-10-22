import React, { Component } from 'react';
import deleteComment from './comment-utils/delete-comment-utils.js';


export default class CommentItem extends Component {

  handleDeleteComment = async () => {
    // destructure props
    const { commentData, token, retrieveComments } = this.props;
    // call delete comment, passing token and numberfied comment id
    await deleteComment(token, Number(commentData.comment_id));
    // call retrieve comments to update the state and render 
    await retrieveComments();
  }
    
    
  render() {

    //   Grab comment data from props to create list item.
    const { commentData } = this.props;

    return (
      <li class='flex box-border border-2 h-32 p-4 border-black relative shadow-lg'>

        <p class='w-full text-center m-auto'>{commentData.comment}</p>

        <button onClick={this.handleDeleteComment} class='absolute right-3 top-3'>❌</button>

      </li>
    );
  }
}