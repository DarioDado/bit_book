import React, { Fragment } from 'react';
import { createHashHistory } from 'history';
import { Link } from 'react-router-dom';
import { storageService } from '../../services/storageService';
import { authService } from '../../services/authService';

const Header = (props) => {

    const onLogoutHandler = e => {
        const history = createHashHistory();
        e.preventDefault();
        storageService.deleteData('loggedInUser');
        history.push('/login');

    }

    const renderMenuButtons = () => {
        return authService.isUserLoggedIn()
            ? <ul className="right hide-on-med-and-down">
                <li><Link to="/feed">Feed</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><a href="/#" onClick={onLogoutHandler}>Logout</a></li>
            </ul>
            : null
    }

    const renderMenuButtonsMobile = () => {
        return authService.isUserLoggedIn()
            ? <ul className="sidenav" id="mobile-demo">
                <li><Link to="/feed">Feed</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><a href="/#" onClick={onLogoutHandler}>Logout</a></li>
            </ul>
            : <ul className="sidenav" id="mobile-demo">
            <li><a href="/#" onClick={onLogoutHandler}>Login / Register</a></li>
            </ul>
    }
    return (
        <Fragment>
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo">Bitbook</Link>
                    <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    {renderMenuButtons()}
                    
                </div>
            </nav>
            {renderMenuButtonsMobile()}
        </Fragment>
    )
};

export { Header };
