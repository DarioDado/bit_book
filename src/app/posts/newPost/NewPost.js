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
            hideModal: null,
        })
        document.querySelector("body").classList.add("scroll-off");
    }

    onCloseModal = (event) => {
        if(event) {
            event.preventDefault();
        }
        this.setState({
            hideModal: "hide",
            inputValue: "",
            validationClass: {
                hideClass: "hide",
                disable: "disabled"
            }
        })
        document.querySelector("body").classList.remove("scroll-off");
    }

    onTextInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
        const inputValue = event.target.value;
        if (validationService.isNotValidText(inputValue)) {
            this.setState({
                validationClass: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isNotValidText(inputValue),
            })
        } else {
            this.setState({
                validationClass: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isNotValidText(inputValue)
            })
        }
    }

    onImageInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
        const inputValue = event.target.value;
        if (validationService.isNotValidImage(inputValue)) {
            this.setState({
                validationClass: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isNotValidImage(inputValue),
            })
        } else {
            this.setState({
                validationClass: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isNotValidText(inputValue)
            })
        }
    }

    onVideoInputChange = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
        const inputValue = event.target.value;
        if (validationService.isNotValidVideo(inputValue)) {
            this.setState({
                validationClass: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isNotValidVideo(inputValue),
            })
        } else {
            this.setState({

                validationClass: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isNotValidVideo(inputValue)
            })
        }
    }

    onPostSubmit = async () => {
        const { loadData } = this.props;
        const textPost = this.state.inputValue;
        await postService.submitTextPosts(textPost)
        this.setState({
            inputValue: ""
        });
        loadData();
        this.onCloseModal();
    }

    onImageSubmit = async () => {
        const { loadData } = this.props;
        const imgUrl = this.state.inputValue;
        await postService.submitImagePosts(imgUrl)
        this.setState({
            inputValue: ""
        });
        loadData();
        this.onCloseModal();
}


    onVideoSubmit = async () => {
        const {loadData } = this.props;
        const videoUrl = this.state.inputValue;
        await postService.submitVideoPosts(videoUrl)
        this.setState({
            inputValue: ""
        });
        loadData();
        this.onCloseModal();
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