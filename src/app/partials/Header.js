import React, { Fragment } from 'react';

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Fragment>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Bitbook</Link>
                    <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/feed">Feed</Link></li>
                        <li><Link to="/people">People</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/feed">Feed</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </Fragment>
    )
};

export { Header };