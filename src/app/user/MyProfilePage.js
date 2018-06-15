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
            hideModal: null
        }
    }

    
    onCloseModal = () => {
        this.setState({
            hideModal: "hide"
        })

    }

    onOpenModal = () => {
        this.setState({
            hideModal: null
        })
    }

    componentDidMount = () => {
        userService.getMyProfile()
            .then(myProfileData => {
                console.log(myProfileData)
                this.setState({
                    myProfileData,
                    loading: false
                })
            })
    }

    render() {
        const { myProfileData, loading } = this.state;

        if (loading) {
            return <div className="loading">Loading</div>
        }
        return (
            <Fragment>
                <div className="col s12 center">
                    <img src={myProfileData.avatarUrl} className="responsive-img circle profile-img" />
                </div>
                <div className="col s12 center">
                    <h2 className="profile-name">{myProfileData.name}</h2>
                    <EditProfileModal onCloseModal={this.onCloseModal} hideModal={this.state.hideModal} />
                    <EditProfileLink onOpenModal={this.onOpenModal}/>
                </div>
                <div className="col s12 center">
                    <p>{myProfileData.aboutShort}</p>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="gray-bar right">
                            <div className="blue-circle">
                                <p>C</p>
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