import React, { Component } from 'react';

import './NewPostModal.css'
import { postService } from '../../../services/postService';
import { validationService } from '../../../services/ValidationService';

class NewPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            validationClass: {
                hideClass: "hide",
                disable: null,
            },
            error: null
        }
    }

    onTextInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
        const inputValue = event.target.value;
        if (validationService.isValidText(inputValue)) {
            this.setState({
                validationClass: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isValidText(inputValue),
            })
        } else {
            this.setState({
                validationClass: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isValidText(inputValue)
            })
        }
    }

    onImageInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
        const inputValue = event.target.value;
        if (validationService.isValidImage(inputValue)) {
            this.setState({
                validationClass: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isValidImage(inputValue),
            })
        } else {
            this.setState({
                validationClass: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isValidText(inputValue)
            })
        }
    }

    onVideoInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
        const inputValue = event.target.value;
        if (validationService.isValidVideo(inputValue)) {
            this.setState({
                validationClass: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isValidVideo(inputValue),
            })
        } else {
            this.setState({

                validationClass: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isValidVideo(inputValue)
            })
        }
    }


    callChangeHandler(event, modalBtn) {
        if (modalBtn === "text") {
            return this.onTextInputChange(event)
        } else if (modalBtn === "image") {
            return this.onImageInputChange(event)
        } else {
            return this.onVideoInputChange(event)
        }
    }

    onPostSubmit = () => {
        const { onCloseModal, loadData } = this.props;
        const textPost = this.state.inputValue;
        postService.submitTextPosts(textPost)
            .then((response) => {
                this.setState({
                    inputValue: ""
                });
                loadData();
                onCloseModal();
            })
    }

    onImageSubmit = () => {
        const { onCloseModal, loadData } = this.props;
        const imgUrl = this.state.inputValue;
        postService.submitImagePosts(imgUrl)
            .then((response) => {
                this.setState({
                    inputValue: ""
                });
                loadData();
                onCloseModal();
            })
    }

    onVideoSubmit = () => {
        const { onCloseModal, loadData } = this.props;
        const videoUrl = this.state.inputValue;
        postService.submitVideoPosts(videoUrl)
            .then((response) => {
                this.setState({
                    inputValue: ""
                });
                loadData();
                onCloseModal();
            })
    }

    callSubmitHandler(event, modalBtn) {
        event.preventDefault();
        if (modalBtn === "text") {
            return this.onPostSubmit()
        } else if (modalBtn === "image") {
            return this.onImageSubmit()
        } else {
            return this.onVideoSubmit()
        }

    }


    render() {
        const { modalBtn, hideModal, onCloseModal } = this.props
        const { inputValue, validationClass, error } = this.state;
        if (!modalBtn) {
            return null;
        }

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
                                <input id="icon_prefix" name="textInputValue" type="text" value={inputValue} onChange={(event) => this.callChangeHandler(event, modalBtn)} />
                            </div>
                            {error && <h5 className={validationClass.hideClass}>{error.message}</h5>}
                        </div>
                        <div className="modal-footer">
                            <button className={`waves-effect waves-light btn right ${validationClass.disable}`} onClick={(event) => { this.callSubmitHandler(event, modalBtn) }}>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPostModal;