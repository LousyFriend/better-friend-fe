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
      postCommentById(token, contact_id, this.state);
    // Call retrieveComments to retrieve new comments in comment section.
      retrieveComments();
    }


    render() {
      console.log(this.state.comment);
      return (
        <div>
          <form onSubmit={this.handleCommentSubmit}>
            <input onChange={async (e) => await this.setState({ comment: e.target.value }) }type='text' required />
            <button>Add Button</button>
          </form>
        </div>
      );
    }
}
