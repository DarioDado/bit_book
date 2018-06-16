import React, { Component } from 'react';
import "./AddPhotoModal.css"
import { postService } from '../../services/postService';

class AddPhotoModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFileValue: null,
            hideValidationClass: "hide",
            disableButton: null,
        }

    }

    
    onImageInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        const inputValue = event.target.value;
        if (inputValue.includes(".jpg") || inputValue.includes(".jpeg") || inputValue.includes(".png") || inputValue.includes(".svg")) {
            this.setState({
                hideValidationClass: "hide",
                disable: null,
            })
        } else {
            this.setState({
                hideValidationClass: "show",
                disableButton: "disabled",
            })
        }
    }

    onImgFileChange = (event) => {
        this.setState({
            inputFileValue: event.target.files[0]
        })
    }
    
    onImgFileUpload = (event) => {
        event.preventDefault();
        const imgFile = this.state.inputFileValue;
        const formData = new FormData();
        formData.append('file', imgFile);
        
       postService.uploadImage(formData)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }



    render() {
        const { disableButton, hideValidationClass, inputValue } = this.state;
        const { hideAddModal, onCloseAddModal } = this.props;
        return (
            <div className={`overlay ${hideAddModal}`}>
                <div className="modal" style={{ display: 'block' }}>
                    <form>
                        <button className="waves-effect waves-light btn right" onClick={onCloseAddModal}>x</button>
                        <div className="modal-content">
                            <div className="container">
                                <div className="row">
                                    <div className="input-field url-input-col col s6">
                                        <input id="icon_prefix" name="urlInputValue" value={inputValue} type="text" onChange={this.onImageInputChange} />
                                        <label htmlFor="icon_prefix">Image URL</label>
                                        <h5 className={hideValidationClass}>Wrong input!</h5>
                                    </div>
                                    <div className="input-field col s6 ">
                                        <input id="icon_prefix"  type="file" onChange={this.onImgFileChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className={`waves-effect waves-light btn right ${disableButton}`} onClick={this.onImgFileUpload}>Upload</button>
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