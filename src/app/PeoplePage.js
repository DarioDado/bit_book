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

    onSearchInputChangeHandler = (inputVal) => {
      userService.getSearchedUsers(inputVal)
        .then(users => this.setState({users, loading:false}));
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
            return <div className="loading">Loading</div>
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
