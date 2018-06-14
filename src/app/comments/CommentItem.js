import React from 'react';
import './CommentItem.css';
import { CommentAuthorDetails } from './CommentAuthorDetails';


export const CommentItem = props => {
    const {comment} = props;

    return (
        
            
                <div className="card-panel teal">
                    <div className="comment-wrap">
                        <CommentAuthorDetails authorId={comment.authorId} />
                        <div className="comment-text">
                            <span className="white-text">{comment.body}</span>
                        </div>
                    </div>
                </div>
    )
}