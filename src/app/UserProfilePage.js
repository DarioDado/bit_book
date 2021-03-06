import React, { Component, Fragment } from 'react';

import './user/MyProfilePage.css'
import { userService } from '../services/userService';
import { Loading } from './partials/Loading';

class UserProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }
    
    componentDidMount = () => {
        const { id } = this.props.match.params;
        console.log(id);
        userService.getUser(id)
            .then(user => {
                this.setState({
                    user,
                    loading: false
                })
            })
    }


    render() {
        const { user, loading } = this.state;

        if (loading) {
            return <Loading />
        }
        return (
            <Fragment>
                <div className="col s12 center">
                    <img src={user.avatarUrl} className="responsive-img circle profile-img" alt=""/>
                </div>
                <div className="col s12 center">
                    <h2 className="profile-name">{user.name}</h2>
                </div>
                <div className="col s12 center">
                    <p>{user.about}</p>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="gray-bar right">
                            <div className="blue-circle">
                                <p>P</p>
                            </div>
                            <p>{user.postsCount} Posts</p>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="gray-bar">
                            <div className="blue-circle">
                                <p>C</p>
                            </div>
                            <p>{user.commentsCount} Comments</p>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export { UserProfilePage };
