import React from 'react';

const EditProfileLink = (props) => {

    const onOpenModal = props.onOpenModal;
    return (
        <a class="waves-effect waves-light modal-trigger" onClick={onOpenModal}>Edit Profile</a>
    );
};

export { EditProfileLink };