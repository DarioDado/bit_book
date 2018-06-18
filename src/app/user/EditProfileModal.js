import React, { Component, Fragment } from 'react';

import './EditProfileModal.css'
import { AddPhotoModal } from './AddPhotoModal';

class EditProfileModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSrc: this.props.photoUrl
        }
    }
    onImageUpload = (event) => {
        event.preventDefault();
        const { photoUrl, onCloseAddModal, onImgFileUpload, inputFileValue, onImageInputChange } = this.props;
        if (inputFileValue) {
            onImgFileUpload(event)
                .then(photoUrl => {
                    this.setState({
                        imageSrc: photoUrl
                    })
                })
        } else {
            onImageInputChange(event);
            this.setState({
                imageSrc: photoUrl
            })
        }
        onCloseAddModal(event)
    }

    render() {
        const { onCloseModal, hideModal, hideAddModal, onChangeInputs, nameInputValue,
            aboutInputValue, photoUrl, onImageInputChange, updateMyProfile, validationClassAddModal,
            validationClassEditModal, error, onImgFileChange, onOpenAddModal, onCloseAddModal } = this.props;
        return (
            <Fragment>
                <div className={`overlay ${hideModal}`}>
                    <div className="modal" style={{ display: 'block' }}>
                        <form>
                            <div className="container">
                                <div className="modal-content row">
                                    <div className="col s12">
                                        <h4 className="left update-profile-title">Update profile</h4>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <img src={this.state.imageSrc} className="upload-placeholder-img" alt="" />
                                            <button className="waves-effect waves-light btn left upload-photo-btn modal-trigger" onClick={onOpenAddModal}>Add photo</button>
                                        </div>
                                        <div className="input-field col s8">
                                            <input id="name" name="nameInputValue" type="text" onChange={onChangeInputs} value={nameInputValue} placeholder="Name" />
                                            {error && <p className={`${validationClassEditModal.hideClass}`}>{error.message}</p>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea" name="aboutInputValue" value={aboutInputValue} onChange={onChangeInputs} placeholder="About"></textarea>
                                            {error && <p className={`${validationClassEditModal.hideClass}`}>{error.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer row">
                                    <div className="input-field col s2 right">
                                        <button className={`waves-effect waves-light btn ${validationClassEditModal.disable}`} onClick={updateMyProfile}>Update</button>
                                    </div>
                                    <div className="input-field col s2 right">
                                        <button className="waves-effect waves-light btn" onClick={onCloseModal}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <AddPhotoModal hideAddModal={hideAddModal} onCloseAddModal={onCloseAddModal} onOpenAddModal={onOpenAddModal} onImageInputChange={onImageInputChange} photoUrl={photoUrl}
                    validationClassAddModal={validationClassAddModal} onImgFileChange={onImgFileChange} onImageUpload={this.onImageUpload} error={error} />
            </Fragment>
        );
    }
}

export { EditProfileModal };