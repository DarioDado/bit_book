import React, { Component } from 'react';
import "./AddPhotoModal.css"
import { postService } from '../../services/postService';

class AddPhotoModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputFileValue: null,
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
    }



    render() {
        const { inputFileValue } = this.state;
        const { hideAddModal, onCloseAddModal, onImageInputChange,hideValidationClass, disable, photoUrl } = this.props;
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
                                        <input id="icon_prefix"  type="file" onChange={this.onImgFileChange}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <button className={`waves-effect waves-light btn right ${disable}`} onClick={this.onImgFileUpload}>Upload</button>
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