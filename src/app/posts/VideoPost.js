import React from 'react';
import { Link } from 'react-router-dom';




export const VideoPost = props => {

    const {id, videoUrl, commentsNum, type} = props.post;

    return (
        <div className="col s12 ">
            <div className="card post-card">
                <div className="card-content">
                    <iframe title="video" className="video-frame" src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <div className="post-details">
                        <Link to={`/feed/${type}/${id}`}>Video post</Link>
                        <span>{commentsNum} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}