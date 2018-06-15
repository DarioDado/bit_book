import React, { Component } from 'react';

import './EditProfileModal.css'

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideClass: "show",
            disable: null,
            name: "",
            about: "",
            photoUrl: ""

        }
    }

    onChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        this.setState({
            [inputName]: inputValue
        })
        console.log(inputValue)
    }

    render() {

        const { onCloseModal, hideModal } = this.props;
        const { name, about, photoUrl } = this.state;
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
                                        <button className="waves-effect waves-light btn left upload-photo-btn">Add photo</button>
                                    </div>
                                    <div className="input-field col s8">
                                        <input id="name" name="name" type="text" onChange={this.onChange} value={name} />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>
                                <div className="row add-photo">
                                    <div className="col s5">
                                        <input type="text" name="photoUrl" value={photoUrl} onChange={this.onChange} placeholder="Insert photo url" />
                                    </div>
                                    <div className="col s2">
                                        <p>OR</p>
                                    </div>
                                    <div className="col s5">
                                        <input type="file" />
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
            </div>
        );
    }
}

export { EditProfileModal };