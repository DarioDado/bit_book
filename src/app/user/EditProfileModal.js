import React, { Component } from 'react';

import './EditProfileModal.css'

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClass: "show",
            disable: null,
            
        }
    }

    render() {

        const { onCloseModal, hideModal } = this.props;
        return (
            <div className={`overlay ${hideModal}`}>
                <div className="modal" style={{ display: 'block' }}>
                    <button className="waves-effect waves-light btn right">x</button>
                    <form>
                        <div className="container">
                            <div className="modal-content row">
                                <div className="col s12">
                                    <h4 className="left update-profile-title">Update profile</h4>
                                </div>
                                <div className="row">
                                    <div className="col s4">
                                        <img src="https://www.indra.fr/userfiles/empty.png" className="upload-placeholder-img" />
                                        <button className="waves-effect waves-light btn left upload-photo-btn">Upload photo</button>

                                    </div>
                                    <div className="input-field col s8">
                                        <input id="name" name="textInputValue" type="text" />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label for="textarea1">Textarea</label>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer row">
                                <div class="input-field col s2 right">
                                    <button className={`waves-effect waves-light btn close-btn`}>Upload</button>
                                </div>
                                <div class="input-field col s2 right">
                                    <button className={`waves-effect waves-light btn`} onClick={onCloseModal}>Close</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export { EditProfileModal };