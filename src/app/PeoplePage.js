import React, { Component, Fragment } from 'react';
import { SearchUsersForm } from './users/SearchUsersForm';
import { UserList } from './users/UserList';
import { userService } from '../services/userService';

export class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: true
        }
    }

    componentDidMount = () => {
        userService.getUsers()
            .then(users => this.setState({users, loading: false}))
    }

    renderUserList = () => {
        const { loading, users } = this.state;
        if (loading) {
            return <div className="loading">Loading</div>
        }
        return <UserList users={users} />
    }

    render() {
        return (
            <Fragment>
                <SearchUsersForm />
                {this.renderUserList()}
            </Fragment>
        )
    }
}