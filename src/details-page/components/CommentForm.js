import React, { Component } from 'react'
import postCommentById from '../post-comments-utils.js';

export default class CommentForm extends Component {
    state = {
      comment: null
    }
    
    handleCommentSubmit = async (e) => {
    // Prevents form defaults
      e.preventDefault();
    // Grabs contact_id from the react-router-dom url params.
      const id = Number(this.props.match.params.id);
    // Grab token and retrieveComments function from props. 
      const { token, retrieveComments } = this.props;

    // ***Should we create a timestamp to accompany comments?

    // Call post comment function w/ token and comment from state.
      postCommentById(token, id, this.state);
    // Call retrieveComments to retrieve new comments in comment section.
      retrieveComments();
    }


    render() {
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
