import React from 'react';




export const VideoPost = props => {

    const {videoUrl, commentsNum} = props.post

    return (
        <div className="col s12 ">
            <div className="card post-card">
                <div className="card-content">
                    <iframe className="video-frame" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div className="post-details">
                        <span>Video post</span>
                        <span>{commentsNum} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}