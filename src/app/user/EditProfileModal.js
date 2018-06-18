import React, { Component, Fragment } from 'react';

import './EditProfileModal.css'
import { AddPhotoModal } from './AddPhotoModal';

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoUrl: "",
            hideAddModal: "hide",
            imgUrl: this.props.myProfileData.avatarUrl,
        }
    }

    onOpenAddModal = (event) => {
        event.preventDefault();

        this.setState({
            hideAddModal: null,
        })
    }

    onCloseAddModal = (event) => {
        event.preventDefault();
        this.setState({
            hideAddModal: "hide",
        })
    }

    onUploadImg = (event, url) => {
        this.setState({
            imgUrl: url
        })
    }

    onImageUpload = (event) => {
        event.preventDefault();
        const { photoUrl, onImgFileUpload, inputFileValue } = this.props;
        if (inputFileValue) {
            onImgFileUpload()
                .then(photoUrl => {
                    this.setState({
                        imgUrl: photoUrl
                    })
                })
        } else {
            this.onUploadImg(event, photoUrl);
        }
        this.onCloseAddModal(event)
    }

    render() {
        const { onCloseModal, hideModal, onChangeInputs, nameInputValue, aboutInputValue, photoUrl, onImageInputChange, updateMyProfile, validationClassAddModal, validationClassEditModal, error, onImgFileChange } = this.props;
        const { hideAddModal, imgUrl } = this.state;
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
                                            <img src={imgUrl} className="upload-placeholder-img" alt="" />
                                            <button className="waves-effect waves-light btn left upload-photo-btn modal-trigger" onClick={this.onOpenAddModal}>Add photo</button>
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
                <AddPhotoModal hideAddModal={hideAddModal} onCloseAddModal={this.onCloseAddModal} onImageInputChange={onImageInputChange} photoUrl={photoUrl}
                    validationClassAddModal={validationClassAddModal} onImgFileChange={onImgFileChange} onImageUpload={this.onImageUpload} error={error}/>
            </Fragment>
        );
    }
}

export { EditProfileModal };