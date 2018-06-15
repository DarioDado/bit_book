import React, { Component, Fragment } from 'react';

import './MyProfilePage.css'
import { userService } from '../../services/userService';

class MyProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myProfileData: null,
            loading: true
        }
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
                            <p>{myProfileData.postsCount}</p>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="gray-bar">
                            <div className="blue-circle">
                                <p>C</p>
                            </div>
                            <p>{myProfileData.commentsCount}s</p>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export { MyProfilePage };