import React from 'react';

export const VideoPostBody = props => {
    const { videoUrl } = props.post;
    return (
        <div className="post-body">
            <iframe title="video" className="video-frame" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
    )
}