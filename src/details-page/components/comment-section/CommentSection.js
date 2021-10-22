import React, { Component } from 'react';
import getCommentsById from './comment-utils/get-comments-utils.js';
import CommentForm from './CommentForm.js';
import CommentItem from './CommentItem.js';

export default class CommentSection extends Component {
    state = {
      comments: [],
      isLoading: true
    }

    retrieveComments = async () => {
      try {
        // set isLoading state to true
        await this.setState({ isLoading: true });
        // Grabs contact_id from the react-router-dom url params grabs token
        const { token, contact_id } = this.props;
        // async make get request for comment data (comments)
        const commentsData = await getCommentsById(token, contact_id);
        // async place in state
        await this.setState({ comments: commentsData });
        // set isLoading state to false
        await this.setState({ isLoading: false });
      } catch (error) {
        console.log(error);
      }
    }

    componentDidMount = async () => {
      // on component mount, call retrieve comments method
      await this.retrieveComments();
    }


    render() {
      // Destructure everything!
      const { token, contact_id } = this.props;
      const { comments } = this.state;

      return (
        <div class='flex flex-col gap-y-2 w-screen justify-center'>

          < CommentForm
            token = { token }
            retrieveComments = { this.retrieveComments }
            contact_id = { contact_id }
          />

          {
            <ul class='p-1 w-screen justify-center'>
              { comments &&
                comments.map(item => 
                  <CommentItem 
                    token = { token }
                    commentData = { item }
                    retrieveComments = { this.retrieveComments }
                    key = { item.comment_id }
                  />
                )
              }
            </ul>
          }

        </div>
      );
    }
}
