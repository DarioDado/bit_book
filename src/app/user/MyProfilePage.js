import React, { Component, Fragment } from 'react';

import './MyProfilePage.css'
import { userService } from '../../services/userService';
import { EditProfileLink } from './EditProfileLink';
import { EditProfileModal } from './EditProfileModal';
import { validationService } from '../../services/ValidationService';

class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfileData: null,
            loading: true,
            hideModal: "hide",
            hideAddModal: "hide",
            nameInputValue: "",
            aboutInputValue: "",
            photoUrl: "",
            validationClassEditModal: {
                hideClass: "hide",
                disable: null,
            },
            validationClassAddModal: {
                hideClass: "hide",
                disable: null,
            },
            inputFileValue: null,
            error: null
        }
    }

    onCloseModal = (event) => {
        event.preventDefault()
        this.setState({
            hideModal: "hide",
        })
    }

    onOpenModal = () => {
        this.setState({
            hideModal: null
        })
    }

    onOpenAddModal = (event) => {
        event.preventDefault();

        this.setState({
            hideAddModal: null,
        })
    }

    onCloseAddModal = (event) => {
        event.preventDefault();
        this.setState({
            hideAddModal: "hide",
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
                    photoUrl: myProfileData.avatarUrl
                })

            })
    }

    onChangeInputs = (event) => {
        const inputName = event.target.name;
        this.setState({
            [inputName]: event.target.value
        })
        const inputValue = event.target.value;
        if (validationService.isValidText(inputValue)) {
            this.setState({
                validationClassEditModal: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isValidText(inputValue),
            })
        } else {
            this.setState({
                validationClassEditModal: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isValidText(inputValue)
            })
        }
    }

    onImageInputChange = (event) => {
        event.preventDefault()
        this.setState({
            photoUrl: event.target.value
        })
        const inputValue = event.target.value;
        if (validationService.isValidImage(inputValue)) {
            this.setState({
                validationClassAddModal: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error: validationService.isValidImage(inputValue),
            })
        } else {
            this.setState({
                validationClassAddModal: {
                    hideClass: "hide",
                    disable: null,
                },
                error: validationService.isValidImage(inputValue)
            })
        }
        console.log(this.state.photoUrl)
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
        const { myProfileData, loading, hideAddModal, hideModal, nameInputValue, aboutInputValue, photoUrl, validationClassEditModal, validationClassAddModal, inputFileValue, error } = this.state;

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
                    <EditProfileModal
                        onCloseModal={this.onCloseModal}
                        hideModal={hideModal}
                        hideAddModal={hideAddModal}
                        nameInputValue={nameInputValue}
                        aboutInputValue={aboutInputValue}
                        photoUrl={photoUrl}
                        onChangeInputs={this.onChangeInputs}
                        onImageInputChange={this.onImageInputChange}
                        updateMyProfile={this.updateMyProfile}
                        myProfileData={myProfileData}
                        validationClassEditModal={validationClassEditModal}
                        validationClassAddModal={validationClassAddModal}
                        error={error}
                        onImgFileUpload={this.onImgFileUpload}
                        onImgFileChange={this.onImgFileChange}
                        inputFileValue={inputFileValue}
                        onOpenAddModal={this.onOpenAddModal}
                        onCloseAddModal={this.onCloseAddModal} />
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
