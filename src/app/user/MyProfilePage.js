import React, { Component, Fragment } from 'react';

import './MyProfilePage.css'
import { userService } from '../../services/userService';
import { EditProfileLink } from './EditProfileLink';
import { EditProfileModal } from './EditProfileModal';

class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfileData: null,
            loading: true,
            hideModal: "hide",
            nameInputValue: "",
            aboutInputValue: "",
            photoUrl: "",
            hideValidationClass: "hide",
            disable: null,
            inputFileValue: null
        }
    }

    onCloseModal = (event) => {
        event.preventDefault()
        this.setState({
            hideModal: "hide",
            nameInputValue: "",
            aboutInputValue: ""
        })
    }

    onOpenModal = () => {
        this.setState({
            hideModal: null
        })
    }

    loadMyProfile = () => {
        userService.getMyProfile()
            .then(myProfileData => {
                this.setState({
                    myProfileData,
                    loading: false,
                    nameInputValue: myProfileData.name,
                    aboutInputValue: myProfileData.aboutShort,

                })
            })
    }

    onChangeInputs = (event) => {
        const inputName = event.target.name;
        this.setState({
            [inputName]: event.target.value
        })
    }

    onImageInputChange = (event) => {
        this.setState({
            photoUrl: event.target.value
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
        const imgFile = this.state.inputFileValue;
       return userService.uploadImage(imgFile)
            .then(response => {
                this.setState({
                    photoUrl: response
                })
                return response
            })
    }

    updateMyProfile = (event) => {
        event.preventDefault()
        const { nameInputValue, aboutInputValue, photoUrl } = this.state;
        userService.updateMyProfile(nameInputValue, aboutInputValue, photoUrl)
            .then(response => {
                this.loadMyProfile();
                this.onCloseModal(event);
            })

    }

    componentDidMount = () => {
        this.loadMyProfile();
    }

    render() {
        const { myProfileData, loading, nameInputValue, aboutInputValue, photoUrl, hideValidationClass, disable, inputFileValue } = this.state;

        if (loading) {
            return <div className="loading">Loading</div>
        }
        return (
            <Fragment>
                <div className="col s12 center">
                    <img src={myProfileData.avatarUrl} className="responsive-img profile-img" alt="" />
                </div>
                <div className="col s12 center">
                    <h2 className="profile-name">{myProfileData.name}</h2>
                    <EditProfileModal onCloseModal={this.onCloseModal} hideModal={this.state.hideModal}
                        nameInputValue={nameInputValue} aboutInputValue={aboutInputValue} photoUrl={photoUrl} onChangeInputs={this.onChangeInputs}
                        onImageInputChange={this.onImageInputChange} updateMyProfile={this.updateMyProfile} myProfileData={myProfileData}
                        hideValidationClass={hideValidationClass} disable={disable} onImgFileUpload={this.onImgFileUpload} onImgFileChange={this.onImgFileChange} 
                        inputFileValue={inputFileValue} />
                    <EditProfileLink onOpenModal={this.onOpenModal} />
                </div>
                <div className="col s12 center">
                    <p>{myProfileData.aboutShort}</p>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="gray-bar right">
                            <div className="blue-circle">
                                <p>P</p>
                            </div>

                            <p>{myProfileData.postsCount} posts</p>

                        </div>
                    </div>
                    <div className="col s6">
                        <div className="gray-bar">
                            <div className="blue-circle">
                                <p>C</p>
                            </div>

                            <p>{myProfileData.commentsCount} comments</p>

                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export { MyProfilePage };
