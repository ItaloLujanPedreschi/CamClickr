import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    return (
        <div className="header">
            <div className="logged-out-header">
                <Link className="home unselectable" to="/">cam clickr</Link>
            </div>
        </div>
    );
}