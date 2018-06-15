import React, { Component, Fragment } from 'react';

import './MyProfilePage.css'

class MyProfilePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="col s12 center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_2nqm0H20gpO-Pf9BsBwuAYt3McWcb-6rFs37i244h71Lyrnkg" className="responsive-img circle" />
                </div>
                <div className="col s12 center">
                    <h2>Name Surname</h2>
                </div>
                <div className="col s12 center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis nibh maximus, consectetur neque sit amet, volutpat nibh. Curabitur efficitur lectus turpis. Vestibulum aliquet semper ullamcorper. Cras sed risus euismod, imperdiet odio sit amet, malesuada nisl. Vivamus viverra nisi et enim convallis, id sodales ex pulvinar. Maecenas sit amet magna ut est posuere vehicula.
                </p>
                </div>
                <div className="row">
                    <div className="col s6">
                        <div className="gray-bar right">
                            <div className="blue-circle">
                                <p>C</p>
                            </div>
                            <p>num of posts</p>
                        </div>
                    </div>
                    <div className="col s6">
                        <div className="gray-bar">
                            <div className="blue-circle">
                                <p>C</p>
                            </div>
                            <p>num of posts</p>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}

export { MyProfilePage };