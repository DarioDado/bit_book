import React, { Component, Fragment } from 'react';
import { SearchUsersForm } from './users/SearchUsersForm';
import { UserList } from './users/UserList';
import { userService } from '../services/userService';
import { Loading } from './partials/Loading';

export class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            loading: true
        }
    }

    loadUsers = async () => {
        const users = await userService.getUsers()
        this.setState({users, loading: false})
    }

    componentDidMount = () => {
        this.loadUsers();
    }

    onSearchInputChangeHandler = async (inputVal) => {
        const users = await userService.getSearchedUsers(inputVal)
        this.setState({users, loading:false});
    }

    renderNoResults = () => (
        <div className="no-result">
            <p><i className="material-icons no-result-icon">sentiment_neutral</i></p>
            <p className="no-result-msg">We couldn't find any people matching your search</p>
        </div>
    );

    renderUserList = () => {
        const { loading, users } = this.state;
        if (loading) {
            return <Loading />
        }
        if (users.length === 0) {
          return this.renderNoResults();
        }
        return <UserList users={users} />
    }

    render() {
        return (
            <Fragment>
                <SearchUsersForm onKeyChangeHandler={this.onSearchInputChangeHandler}/>
                {this.renderUserList()}
            </Fragment>
        )
    }
}
