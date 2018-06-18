import React, { Component } from 'react';
import "./AddPhotoModal.css"

class AddPhotoModal extends Component {

  
    render() {
        const { hideAddModal, onCloseAddModal, onImageInputChange, hideValidationClass, disable, photoUrl, onImgFileChange, onImageUpload } = this.props;
        return (
            <div className={`overlay ${hideAddModal}`}>
                <div className="modal" style={{ display: 'block' }}>
                    <form>
                        <button className="waves-effect waves-light btn right" onClick={onCloseAddModal}>x</button>
                        <div className="modal-content">
                            <div className="container">
                                <div className="row">
                                    <div className="input-field url-input-col col s6">
                                        <input id="icon_prefix" name="photoUrl" value={photoUrl} type="text" onChange={onImageInputChange} />
                                        <label htmlFor="icon_prefix">Image URL</label>
                                        <h5 className={hideValidationClass}>Wrong input!</h5>
                                    </div>
                                    <div className="input-field col s6 ">
                                        <input id="icon_prefix" type="file" onChange={onImgFileChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className={`waves-effect waves-light btn right ${disable}`} onClick={onImageUpload}>Upload</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export { AddPhotoModal };