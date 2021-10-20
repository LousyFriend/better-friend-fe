import React, { Component } from 'react';
import getCommentsById from '../get-comments-utils.js';
import CommentForm from './CommentForm.js';
import CommentItem from './CommentItem.js';

export default class CommentSection extends Component {

    state = {
      comments: [],
      isLoading: true
    }

    retrieveComments = async () => {
      try {
            // set isLoading state to true.
        await this.setState({ isLoading: true });
            // Grabs contact_id from the react-router-dom url params.
        const id = Number(this.props.match.params.id);
            // grabs token
        const { token } = this.props;
            
            // async make get request for comment data (comments)
        const commentsData = await getCommentsById(token, id);
        console.log('comments data', commentsData);
      
            // async place in state
        await this.setState({ comments: commentsData });
            // set isLoading state to false.
        await this.setState({ isLoading: false });
    
      } catch (error) {
        console.log(error);
      }
    }

    componentDidMount = async () => {
      await this.retrieveComments();
    }


    render() {
      const { token, retrieveComments } = this.props;
      const { comments } = this.state;
      return (
        <div>

          < CommentForm
            token = { token }
            retrieveComments = { retrieveComments }
          />

          <ul>
            {
              comments.map(item => 
                <CommentItem 
                  token = { token }
                  commentData = { comments }
                />
              )
            }
          </ul>

        </div>
      );
    }
}
