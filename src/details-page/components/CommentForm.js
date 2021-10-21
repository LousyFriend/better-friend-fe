import React, { Component } from 'react';
import postCommentById from '../post-comments-utils.js';

export default class CommentForm extends Component {
    state = {
      comment: null
    }
    
    handleCommentSubmit = async (e) => {
    // Prevents form defaults
      e.preventDefault();

    // Grab contact_id, token, and retrieveComments function from props. 
      const { token, retrieveComments, contact_id } = this.props;

    // ***Should we create a timestamp to accompany comments?

    // Call post comment function w/ token and comment from state.
      await postCommentById(token, contact_id, this.state);
    // Call retrieveComments to retrieve new comments in comment section.
      await retrieveComments();
    }


    render() {
      console.log('comment state on render', this.state.comment);
      return (
        <div>
          <form onSubmit={this.handleCommentSubmit} class="flex flex-col gap-y-2">
            <textarea onChange={async (e) => await this.setState({ comment: e.target.value })} type='text' required class='box-border h-32 w-1/3 p-4 border-2 border-black'/>
            <button class='box-border border-2 h-16 w-1/3 border-black p-4'>Post Note</button>
          </form>
        </div>
      );
    }
}
