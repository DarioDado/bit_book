import React from 'react';

const EditProfileLink = (props) => {

    const onOpenModal = props.onOpenModal;
    return (
        <a className="waves-effect waves-light modal-trigger" onClick={onOpenModal}>Edit Profile</a>
    );
};

export { EditProfileLink };