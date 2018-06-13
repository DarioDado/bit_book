import React from 'react';




export const ImagePost = props => {

    const {imageUrl, commentsNum} = props.post

    return (
        <div className="col s12 ">
            <div className="card post-card">
                <div className="card-content">
                    <img src={imageUrl} alt="post image" />
                    <div className="post-details">
                        <span>Image post</span>
                        <span>{commentsNum} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}