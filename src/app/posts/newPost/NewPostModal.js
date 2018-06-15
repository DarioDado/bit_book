import React, { Component } from 'react';

import './NewPostModal.css'
import { postService } from '../../../services/postService';

class NewPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            hideClass: "hide",
            disable: null,
        }
    }

    onTextInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        const inputValue = event.target.value;
        if(inputValue !== ""){
            this.setState({
                hideClass: "hide",
                disable: null,
            })
        }else {
            this.setState({
                hideClass: "show",
                disable: "disabled",
            })
        }
    }

    onImageInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        const inputValue = event.target.value;
        if (inputValue.includes(".jpg") || inputValue.includes(".jpeg") || inputValue.includes(".png") || inputValue.includes(".svg")) {
            this.setState({
                hideClass: "hide",
                disable: null,
            })
        } else {
            this.setState({
                hideClass: "show",
                disable: "disabled",
            })
        }
    }

    onVideoInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        const inputValue = event.target.value;
        if (inputValue.includes("https://") && inputValue.includes("youtube")) {
            this.setState({
                hideClass: "hide",
                disable: null,

            })
        } else {
            this.setState({
                hideClass: "show",
                disable: "disabled",
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
        const { inputValue, disable, hideClass } = this.state;
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
                            <h5 className={hideClass}>Wrong input!</h5>
                        </div>
                        <div className="modal-footer">
                            <button className={`waves-effect waves-light btn right ${disable}`} onClick={(event) => { this.callSubmitHandler(event, modalBtn) }}>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPostModal;