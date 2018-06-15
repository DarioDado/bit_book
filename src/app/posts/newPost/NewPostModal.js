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
    }

    onImageInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        const inputValue = event.target.value;
        if (!inputValue.includes(".jpg") || !inputValue.includes(".png") || !inputValue.includes(".svg")) {
            this.setState({
                hideClass: "show",
                disable: "disabled"
            })
        } else {
            this.setState({
                hideClass: "hide",
                disable: null
            })
        }
    }

    onVideoInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        const inputValue = event.target.value;
        if (!inputValue.includes("https//") && !inputValue.includes("youtube")) {
            this.setState({
                hideClass: null,
                disable: "disabled"
            })
        } else {
            this.setState({
                hideClass: "hide",
                disable: null
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
        const textPost = this.state.inputValue;
        postService.submitTextPosts(textPost)
            .then((response) => {
                console.log(response)
            })
    }

    onImageSubmit = () => {
        const imgUrl = this.state.inputValue;
        postService.submitImagePosts(imgUrl)
            .then((response) => console.log(response))
    }

    onVideoSubmit = () => {
        const videoUrl = this.state.inputValue;
        postService.submitVideoPosts(videoUrl)
            .then((response) => {
                console.log(response)
            })
    }

    callSubmitHandler(modalBtn) {
        if (modalBtn === "text") {
            return this.onPostSubmit()
        } else if (modalBtn === "image") {
            return this.onImageSubmit()
        } else {
            return this.onVideoSubmit()
        }
    }


    render() {
        const { modalBtn,  hideModal, onCloseModal} = this.props
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
                                <input id="icon_prefix" name="textInputValue" type="text" className="validate" value={inputValue} onChange={(event) => this.callChangeHandler(event, modalBtn)} />
                            </div>
                            <h5 className={hideClass}>Wrong input!</h5>
                        </div>
                        <div className="modal-footer">
                            <button className={`waves-effect waves-light btn right ${disable}`} onClick={(event) => {
                                event.preventDefault();
                                this.callSubmitHandler(modalBtn)
                            }}>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPostModal;