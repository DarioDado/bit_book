import React, { Component, Fragment } from 'react';
import { SearchUsersForm } from './users/SearchUsersForm';
import { UserList } from './users/UserList';

export class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: true
        }
    }

    render() {
        const { users } = this.state;
        return (
            <Fragment>
                <SearchUsersForm />
                <UserList users={users} />
            </Fragment>
        )
    }
}