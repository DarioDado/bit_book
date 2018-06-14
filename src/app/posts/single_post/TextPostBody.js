import React from 'react';

export const TextPostBody = props => {
    const { text } = props.post;
    return (
        <div className="post-body">
            <p className="text-post-body">{text}</p>
        </div>
    )
}