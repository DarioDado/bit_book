import React, { Component } from 'react';
import { CommentItem } from './CommentItem';
import { commentService } from '../../services/commentServces';
import './CommentList.css';


export class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: null,
            loading: true
        }
    }

    componentDidMount = () => {
        const { postId } = this.props;
        commentService.getSinglePostComments(postId)
            .then(comments=>{
                this.setState({comments, loading: false})
            })
    }

    renderComments = () => {
        const {loading, comments} = this.state;
        if(loading) {
            return <div className="loading">Loading</div>
        } else if (comments.length === 0) {
            return <p className="no-comments-msg">There are no comments for this post.</p>
        }
        return comments.map(comment => <CommentItem comment={comment} key={comment.id} />)
    }


    render() {
        return this.renderComments();
    }

}