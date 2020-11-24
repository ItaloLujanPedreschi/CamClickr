import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    if (currentUser) {
        return null;
    } else {
        return (
            <footer>
                <div className="footer-container">
                    <ul className="footer-links">
                        <li className="footer-link"><Link to="/">About</Link></li>
                        <li className="footer-link"><Link to="/">Jobs</Link></li>
                        <li className="footer-link"><Link to="/">Blog</Link></li>
                        <li className="footer-link"><Link to="/">Developers</Link></li>
                        <li className="footer-link"><Link to="/">Guidelines</Link></li>
                        <li className="footer-link"><Link to="/">Help</Link></li>
                        <li className="footer-link"><Link to="/">Help forum</Link></li>
                        <li className="footer-link"><Link to="/">English</Link></li>
                        <li className="footer-link"><Link to="/">SmugMug+Flickr.</Link></li>
                    </ul>
                </div>
            </footer>
        );
    }
}