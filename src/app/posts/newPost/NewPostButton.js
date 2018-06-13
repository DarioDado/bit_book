import React from 'react';
import { Link } from 'react-router-dom'

const NewPostButton = () => {
    return (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
                <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><Link to="/posts/new/text" className="btn-floating blue"><i className="material-icons">text_format</i> Post</Link></li>
                <li><Link to="/posts/new/image" className="btn-floating green"><i className="material-icons">image</i>Image</Link></li>
                <li><Link to="/posts/new/video" className="btn-floating red"><i className="material-icons">ondemand_video</i>Video</Link></li>
            </ul>
        </div>
    );
};

export default NewPostButton;