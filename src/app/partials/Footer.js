import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
          <footer className="footer-copyright page-footer">
            <div className="container">
            © {new Date().getFullYear()} DarBar Team
            </div>
        </footer>
    );
};

export {Footer};