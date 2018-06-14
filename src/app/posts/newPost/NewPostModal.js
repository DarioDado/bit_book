import React, { Component } from 'react';

import './NewPostModal.css'
import { postService } from '../../../services/postService';

class NewPostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
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
    }


    onVideoInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
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


    onPostSubmit = (event) => {
        event.preventDefault();
        const textPost = this.state.inputValue;
        postService.submitTextPosts(textPost)
            .then((response) => {
                console.log(response)
            })
    }

    onImageSubmit = (event) => {
        event.preventDefault();
        const imgUrl = this.state.inputValue;
        postService.submitImagePosts(imgUrl)
        .then((response) => console.log(response))
    }

    onVideoSubmit = (event) => {
        event.preventDefault();
       const videoUrl = this.state.inputValue;
        postService.submitVideoPosts(videoUrl)
            .then((response) => {
                console.log(response)
            })
    }

    callSubmitHandler(event, modalBtn) {
        if (modalBtn === "text") {
            return this.onPostSubmit(event)
        } else if (modalBtn === "image") {
            return this.onImageSubmit(event)
        } else {
            return this.onVideoSubmit(event)
        }
    }

    render() {
        const { modalBtn, onCloseModal } = this.props
        if (!modalBtn) {
            return null;
        }

        return (
            <div className="overlay" onClick={onCloseModal}>
                <div className="modal" style={{ display: 'block' }}>
                    <form>
                        <div className="modal-content">
                            <div className="input-field col s12">
                                <h3>New {modalBtn} post</h3>
                            </div>
                            <div className="input-field col s12">
                                <label htmlFor="icon_prefix">{modalBtn} post</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="icon_prefix" name="textInputValue" type="text" className="validate" value={this.state.inputValue} onChange={(event) => this.callChangeHandler(event, modalBtn)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="waves-effect waves-light btn right" onClick={(event) => this.callSubmitHandler(event, modalBtn)}>Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPostModal;