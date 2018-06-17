import React, { Component, Fragment } from 'react';

import './EditProfileModal.css'
import { AddPhotoModal } from './AddPhotoModal';
import { userService } from '../../services/userService';


class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClass: "show",
            disable: null,
            photoUrl: "",
            hideAddModal: "hide",
            imgUrl: null,
            inputFileValue: null
        }
    }

    // onAddPhoto = (event) => {
    //     const photoUrl = this.state.photoUrl;


    // }

    onOpenAddModal = (event) => {
        event.preventDefault();
        this.setState({
            hideAddModal: null
        })
    }

    onCloseAddModal = (event) => {
        event.preventDefault()
        this.setState({
            hideAddModal: "hide"
        })
    }

    onUploadImg = (event, url) => {
        this.setState({
            imgUrl: url
        })
    }

    onImgFileChange = (event) => {
        this.setState({
            inputFileValue: event.target.files[0]
        })
    }

    onImgFileUpload = (event) => {
        const imgFile = this.state.inputFileValue;
        const formData = new FormData();
        formData.append('file', imgFile);
        console.log(formData)

        userService.uploadImage(formData)
            .then(response => {
                this.setState({
                    imgUrl: response
                })
            })
    }

    render() {
        const { onCloseModal, hideModal, onChangeInputs, nameInputValue, aboutInputValue, photoUrl, onImageInputChange, updateMyProfile, disable, hideValidationClass } = this.props;
        const { hideAddModal, imgUrl, inputFileValue } = this.state;
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
                                            <input id="name" name="nameInputValue" type="text" onChange={onChangeInputs} value={nameInputValue} />
                                            <label htmlFor="name">Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea id="textarea1" className="materialize-textarea" name="aboutInputValue" value={aboutInputValue} onChange={onChangeInputs} ></textarea>
                                            <label htmlFor="textarea1">Textarea</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer row">
                                    <div className="input-field col s2 right">
                                        <button className={`waves-effect waves-light btn close-btn`} onClick={updateMyProfile}>Upload</button>
                                    </div>
                                    <div className="input-field col s2 right">
                                        <button className={`waves-effect waves-light btn`} onClick={onCloseModal}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <AddPhotoModal hideAddModal={hideAddModal} onCloseAddModal={this.onCloseAddModal} onImageInputChange={onImageInputChange} photoUrl={photoUrl}
                    hideValidationClass={hideValidationClass} disable={disable} inputFileValue={inputFileValue}
                    onImgFileChange={this.onImgFileChange} onImgFileUpload={this.onImgFileUpload} onUploadImg={this.onUploadImg} />
            </Fragment>
        );
    }
}

export { EditProfileModal };