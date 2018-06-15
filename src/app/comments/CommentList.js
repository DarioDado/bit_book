import React, { Component } from 'react';
import { CommentItem } from './CommentItem';
import './CommentList.css';


export class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    

    renderComments = () => {
        const {comments} = this.props;
        if (comments.length === 0) {
            return <p className="no-comments-msg">There are no comments for this post.</p>
        }
        return comments.map(comment => <CommentItem comment={comment} key={comment.id} />)
    }


    render() {
        return this.renderComments();
    }

}