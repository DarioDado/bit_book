import React from 'react';

const NewPostButton = () => {
    return (
        <div class="fixed-action-btn">
            <a class="btn-floating btn-large red">
                <i class="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><a class="btn-floating blue"><i class="material-icons">text_format</i> Post</a></li>
                <li><a class="btn-floating green"><i class="material-icons">image</i>Image</a></li>
                <li><a class="btn-floating red"><i class="material-icons">ondemand_video</i>Video</a></li>
            </ul>
        </div>
    );
};

export default NewPostButton;