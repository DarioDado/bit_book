import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';


export const UserItem = props => {
    const {user} = props;
    console.log(user);

    return (
        <div class="row">
            <div class="col s12">
                <div class="card-panel ">
                    <div className="user-item-wrap">
                        <div className="user-avatar">
                            <img src={user.avatarUrl} alt="avatar" />
                        </div>
                        <div className="user-details">
                            <Link to={`/users/${user.id}`}><h2 className="user-name">{user.name}</h2></Link>

                            <p className="user-about">{user.aboutShort}</p>
                        </div>
                        <div className="last-post-info">
                            <p style={{fontWeight: 'bolder'}}>Last post</p>
                            <p className="last-post-time">{user.getTimeFromLastPost()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
