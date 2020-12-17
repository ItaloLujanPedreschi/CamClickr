import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="header">
            <div className="logged-out-header">
                <div className="logo-area">
                    <Link className="home unselectable" to="/">
                        <img src={`${window.logo}`} />
                        cam clickr
                    </Link>
                </div>
            </div>
        </div>
    );
}