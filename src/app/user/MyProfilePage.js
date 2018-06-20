import React, { Component, Fragment } from 'react';

import './MyProfilePage.css'
import { userService } from '../../services/userService';
import { validationService } from '../../services/ValidationService';
import { Loading } from '../partials/Loading';
import { EditProfileModal } from './EditProfileModal';
import { NewPostButton } from '../posts/newPost/NewPostButton';
import { EditProfileForm } from './EditProfileForm';

class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true,
            isOpen: false
        }
    }

    loadMyProfile = () => {
        userService.getMyProfile()
            .then(user => {
                this.setState({
                    user,
                    loading: false,
                    nameInputValue: user.name,
                    aboutInputValue: user.aboutShort,
                    photoUrl: user.avatarUrl
                })

            })
    }

    onEditClick = (event) => {
        event.preventDefault();
        this.setState({
            isOpen: true
        })
    }

    onCancelClick = (event) => {
        event.preventDefault();
        this.setState({
            isOpen:false
        })
    }

    onSubmitClick = (nameInput, aboutInput, imgUrl) => {
        userService.updateMyProfile(nameInput, aboutInput, imgUrl)
            .then(data => {
                this.loadMyProfile()
            })
    }

    componentDidMount = () => {
        this.loadMyProfile();
    }

    render() {
        const { user, loading, isOpen } = this.state;

        if (loading) {
            return <Loading />
        }
        return (
            <Fragment>
                <div className="col s12 center">
                    <img src={user.avatarUrl} className="responsive-img profile-img" alt="" />
                </div>
                <div className="col s12 center">
                    <h2 className="profile-name">{user.name}</h2>
                    <a href="" onClick={this.onEditClick}>Edit profile</a>
                </div>
                <div className="col s12 center">
                    <p>{user.aboutShort}</p>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="gray-bar right">
                            <div className="blue-circle">
                                <p>P</p>
                            </div>
                            <p>{user.postsCount} posts</p>

                        </div>
                    </div>
                    <div className="col s6">
                        <div className="gray-bar">
                            <div className="blue-circle">
                                <p>C</p>
                            </div>

                            <p>{user.commentsCount} comments</p>

                        </div>
                    </div>
                </div>
                <EditProfileModal isOpen={isOpen} >
                    <EditProfileForm user={user} onCancelClick={this.onCancelClick} onSubmitClick={this.onSubmitClick}/>

                </EditProfileModal>
            </Fragment >
        );
    }
}

export { MyProfilePage };

// onUserChange={} onSubmit={this.lkfdslkjdsflkjfdslkj}