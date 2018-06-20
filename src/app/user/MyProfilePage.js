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
                name: "hide",
                about:"hide",
                disable: null,
            },
            validationClassAddModal: {
                hideClass: "hide",
                disable: "disabled",
            },
            inputFileValue: null,
            error: {
                nameError: null,
                aboutError: null,
                imageError: null
            }
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
            hideModal: null,
        })
    }

    onOpenAddModal = (event) => {
        event.preventDefault();

        this.setState({
            hideAddModal: null,
            photoUrl: ""
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
        const inputId = event.target.id;
        this.setState({
            [inputName]: event.target.value,
            [inputId]: event.target.id
        })
        const inputValue = event.target.value;
        if (validationService.isValidText(inputValue)) {
            this.setState({
                validationClassEditModal: {
                    [inputId]: "show",
                    disable: "disabled",
                },
                error:{
                    [`${[inputId]}Error`]: validationService.isValidText(inputValue),

                }
            })
        } else {
            this.setState({
                validationClassEditModal: {
                    [inputId]: "hide",
                    disable: null,
                },
                error:{
                    [`${[inputId]}Error`]: validationService.isValidText(inputValue),
                }
            })
        }
    }

    onImageInputChange = (event) => {
        event.preventDefault()
        const inputValue = event.target.value;
        this.setState({
            photoUrl: inputValue
        })
        if (validationService.isValidImage(inputValue)) {
            this.setState({
                validationClassAddModal: {
                    hideClass: "show",
                    disable: "disabled",
                },
                error:{
                    imageError: validationService.isValidImage(inputValue),
                }
            })
        } else {
            this.setState({
                validationClassAddModal: {
                    hideClass: "hide",
                    disable: null,
                },
                error:{
                    imageError: validationService.isValidImage(inputValue),
                }
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
                        onCloseAddModal={this.onCloseAddModal}
                        loadMyProfile={this.loadMyProfile}/>
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
