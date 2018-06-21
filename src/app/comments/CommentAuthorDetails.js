import React, { Component } from 'react';
import { userService } from '../../services/userService';

export class CommentAuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }

    componentDidMount = async () => {
        const {authorId} = this.props;
        const user = await userService.getUser(authorId);
        this.setState({user, loading: false});
    }

    renderUserDetails = () => {
        const {loading, user} = this.state;
        if (loading) {
            return <div className="loading">Loading</div>
        }
        return (
            <div className="author-details">
                <div><img src={user.avatarUrl} alt="profile img" /></div>
                <span className="author-name">{user.name}</span>
            </div>
        )
    }

    render() {
        return this.renderUserDetails();
    }
}