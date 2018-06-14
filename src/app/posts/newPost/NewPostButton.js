import React from 'react';

const NewPostButton = (props) => {
    const onClick = props.onClick;
    return (
        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
                <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><button data-target="text" className="btn modal-trigger btn-floating  blue" onClick={onClick}><i className="material-icons">text_format</i> Post</button></li>
                <li><button data-target="image" className="btn modal-trigger btn-floating  green"  onClick={onClick}><i className="material-icons">image</i>Image</button></li>
                <li><button data-target="video" className="btn modal-trigger btn-floating  red"  onClick={onClick}><i className="material-icons">ondemand_video</i>Video</button></li>
            </ul>
        </div>
    );
};

export { NewPostButton };