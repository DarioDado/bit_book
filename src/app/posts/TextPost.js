import React from 'react';




export const TextPost = props => {

    const {text, commentsNum} = props.post


    return (
        <div className="col s12 ">
            <div className="card post-card">
                <div className="card-content">
                    <p className="post-text-body">{text}</p>
                    <div className="post-details">
                        <span>Text post</span>
                        <span>{commentsNum} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}