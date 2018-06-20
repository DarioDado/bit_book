import React, { Component } from 'react';

import './NewPostModal.css'
import { postService } from '../../../services/postService';
import { validationService } from '../../../services/ValidationService';

const NewPostModal = (props) => {

    const renderNewPostModal = () => {
        const { modalBtn, hideModal, onCloseModal, inputValue, validationClass, error, callChangeHandler, callSubmitHandler } = props

        if (!modalBtn) {
            return null;
        } else {

            return (
                <div className={`overlay ${hideModal}`}>
                    <div className="modal" style={{ display: 'block' }}>
                        <form>
                            <button className="waves-effect waves-light btn right" onClick={onCloseModal}>x</button>
                            <div className="modal-content">
                                <div className="input-field col s12">
                                    <h3>New {modalBtn} post</h3>
                                </div>
                                <div className="input-field col s12">
                                    <label htmlFor="icon_prefix">{modalBtn} post</label>
                                </div>
                                <div className="input-field col s12">
                                    <input id="icon_prefix" name="textInputValue" type="text" value={inputValue} onChange={(event) => callChangeHandler(event, modalBtn)} />
                                </div>
                                {error && <h5 className={validationClass.hideClass}>{error.message}</h5>}
                            </div>
                            <div className="modal-footer">
                                <button className={`waves-effect waves-light btn right ${validationClass.disable}`} onClick={(event) => { callSubmitHandler(event, modalBtn) }}>Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }

    }
    return renderNewPostModal()
}

export default NewPostModal;