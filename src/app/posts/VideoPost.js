import React from 'react';




export const VideoPost = props => {

    return (
        <div className="col s12 ">
            <div className="card post-card">
                <div className="card-content">
                    <iframe className="video-frame" src="https://www.youtube.com/embed/LcWdZtiUDHg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div className="post-details">
                        <span>Video post</span>
                        <span>15 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}