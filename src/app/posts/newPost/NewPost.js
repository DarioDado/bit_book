import React, { Component, Fragment } from 'react';
import { validationService } from '../../../services/ValidationService';
import NewPostModal from './NewPostModal';
import { NewPostButton } from './NewPostButton';
import { postService } from '../../../services/postService';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBtn: null,
            hideModal: null,
            inputValue: "",
            validationClass: {
                hideClass: "hide",
                disable: "disabled",
            },
            error: null
        }
    }
    
    onNewPostClick = (event) => {
        this.setState({
            modalBtn: event.target.parentElement.getAttribute("data-target"),
            hideModal: null
        })
        document.querySelector("body").classList.add("scroll-off");
    }

    onCloseModal = (event) => {
        if(event) {
            event.preventDefault();
        }
        this.setState({
            hideModal: "hide",
            inputValue: ""
        })
        document.querySelector("body").classList.remove("scroll-off");
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

    callChangeHandler = (event, modalBtn) => {
        if (modalBtn === "text") {
            return this.onTextInputChange(event)
        } else if (modalBtn === "image") {
            return this.onImageInputChange(event)
        } else {
            return this.onVideoInputChange(event)
        }
    }

    callSubmitHandler = (event, modalBtn) => {
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
        const {inputValue, validationClass, error} = this.state;
        return (
            <Fragment>
                <NewPostModal modalBtn={this.state.modalBtn} onCloseModal={this.onCloseModal} hideModal={this.state.hideModal} 
                loadData={this.loadData} inputValue={inputValue} validationClass={validationClass} error={error}
                callChangeHandler={this.callChangeHandler} callSubmitHandler={this.callSubmitHandler}/>
                <NewPostButton onClick={this.onNewPostClick} />
            </Fragment>
        );
    }
}

export { NewPost };