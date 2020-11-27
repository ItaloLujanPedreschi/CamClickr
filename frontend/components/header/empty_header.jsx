import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="header">
            <div className="logged-out-header">
                <div className="logo-area">
                    <img src={`${window.logo}`} />
                    <Link className="home unselectable" to="/">cam clickr</Link>
                </div>
            </div>
        </div>
    );
}