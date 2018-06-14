import React from 'react';

export const ImagePostBody = props => {
    const { imageUrl } = props.post;
    return (
        <div className="post-body">
            <img src={imageUrl} alt="post" />
        </div>
    )
}