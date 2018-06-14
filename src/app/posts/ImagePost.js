import React from 'react';
import { Link } from 'react-router-dom';




export const ImagePost = props => {

    const {id,imageUrl, commentsNum, type} = props.post

    return (
        <div className="col s12 ">
            <div className="card post-card">
                <div className="card-content">
                    <img src={imageUrl} alt="profile" />
                    <div className="post-details">
                        <Link to={`/feed/${type}/${id}`} >Image post</Link>
                        <span>{commentsNum} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}