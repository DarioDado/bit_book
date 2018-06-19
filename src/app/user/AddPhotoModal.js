import React, { Component } from 'react';
import "./AddPhotoModal.css"

const AddPhotoModal = (props) => {

    const { hideAddModal, onCloseAddModal, onImageInputChange, validationClassAddModal, disable, photoUrl, onImgFileChange, onImageUpload, error } = props;
    return (
        <div className={`overlay ${hideAddModal}`}>
            <div className="modal" style={{ display: 'block' }}>
                <form>
                    <button className="waves-effect waves-light btn right" onClick={onCloseAddModal}>x</button>
                    <div className="modal-content">
                        <div className="container">
                            <div className="row">
                                <div className="input-field url-input-col col s6">
                                    <input id="icon_prefix" name="photoUrl" value={photoUrl} type="text" onChange={onImageInputChange} placeholder="Image url"/>
                                    {error && <h5 className={validationClassAddModal.hideClass}>{error.message}</h5>}
                                </div>
                                <div className="input-field col s6 ">
                                    <input id="icon_prefix" type="file" onChange={onImgFileChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <button className={`waves-effect waves-light btn right ${validationClassAddModal.disable}`} onClick={onImageUpload}>Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { AddPhotoModal };