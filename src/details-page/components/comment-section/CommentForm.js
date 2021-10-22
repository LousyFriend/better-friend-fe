import React, { Component } from 'react';
import postCommentById from './comment-utils/post-comments-utils.js';

export default class CommentForm extends Component {
    state = {
      comment: null
    }
    
    handleCommentSubmit = async (e) => {
    // Prevents form defaults
      e.preventDefault();
    // Grab contact_id, token, and retrieveComments function from props. 
      const { token, retrieveComments, contact_id } = this.props;
    // Call post comment function w/ token and comment from state.
      await postCommentById(token, contact_id, this.state);
    // Call retrieveComments to retrieve new comments in comment section.
      await retrieveComments();
    }


    render() {
      return (
        <div class='w-screen flex justify-center'>
          <form onSubmit={this.handleCommentSubmit} class="flex flex-col w-5/6 md:w-1/2 gap-y-2">
            <textarea onChange={async (e) => await this.setState({ comment: e.target.value })} type='text' required class='m-auto box-border h-32 w-full p-4 border-2 border-black'/>
            <button class=' m-auto box-border border-2 w-full h-16 border-black p-4 cursor-pointer'>Post Note</button>
          </form>
        </div>
      );
    }
}
