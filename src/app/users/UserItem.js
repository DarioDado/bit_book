import React from 'react';
import './UserItem.css';


export const UserItem = props => {

    return (
        <div class="row">
            <div class="col s12">
                <div class="card-panel ">
                    <div className="user-item-wrap">
                        <div className="user-avatar">
                            <img src="https://sidekickmag.com/wp-content/themes/sidekick-2017/images/no-profile.png" alt="avatar" />
                        </div>
                        <div className="user-details">
                            <h2 className="user-name">Dario Stamenkovic</h2>
                            <p className="user-about">
                            pden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undo
                            </p>
                        </div>
                        <div className="last-post-info">
                            <p>Last post</p>
                            <p className="last-post-time">at 07:53</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}