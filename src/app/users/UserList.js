import React from 'react';
import { UserItem } from './UserItem';


export const UserList = props => {
    const {users} = props;
    const renderUserItems = () => {
        return users.map(user => <UserItem user={user} key={user.id}/>)
    }

    return renderUserItems();
}
