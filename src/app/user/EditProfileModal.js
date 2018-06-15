import React, { Component } from 'react';

import './EditProfileModal.css'
import { AddPhotoModal } from './AddPhotoModal';

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClass: "show",
            disable: null,
            name: "",
            about: "",
            photoUrl: "",
            hideAddModal: "hide"
        }
    }

    onChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }

    onAddPhoto = (event) => {
        const photoUrl = this.state.photoUrl;
        
    }

    onOpenAddModal = () => {
        this.setState({
            hideAddModal: null
        })
    }

    onCloseAddModal = () => {
        this.setState({
            hideAddModal: "hide"
        })
    }

    render() {

        const { onCloseModal, hideModal } = this.props;
        const { name, about, photoUrl, hideAddModal } = this.state;
        return (
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
                                        <img src="https://www.indra.fr/userfiles/empty.png" className="upload-placeholder-img" />
                                        <button className="waves-effect waves-light btn left upload-photo-btn modal-trigger" onClick={this.onOpenAddModal}>Add photo</button>
                                    </div>
                                    <div className="input-field col s8">
                                        <input id="name" name="name" type="text" onChange={this.onChange} value={name} />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea" name="about" onChange={this.onChange} value={about}></textarea>
                                        <label htmlFor="textarea1">Textarea</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer row">
                                <div className="input-field col s2 right">
                                    <button className={`waves-effect waves-light btn close-btn`}>Upload</button>
                                </div>
                                <div className="input-field col s2 right">
                                    <button className={`waves-effect waves-light btn`} onClick={onCloseModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <AddPhotoModal hideAddModal={hideAddModal} onCloseAddModal={this.onCloseAddModal}/>
            </div>
        );
    }
}

export { EditProfileModal };