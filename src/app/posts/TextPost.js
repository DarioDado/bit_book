import React from 'react';
import { Link } from 'react-router-dom';




export const TextPost = props => {

    const { text, commentsNum, id, type } = props.post


    return (
        <div className="col s12 ">
            <div className="card post-card">
                <div className="card-content">
                    <p className="post-text-body">{text}</p>
                    <div className="post-details">
                        <Link to={`/feed/${type}/${id}`} >Text post</Link>
                        <span>{commentsNum} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}