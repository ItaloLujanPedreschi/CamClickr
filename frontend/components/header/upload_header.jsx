import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const header = currentUser ? "logged-in-home-header" : "logged-out-home-header";
    const display = (
        <div className="upload-header">
            <div>
                <Link className="home unselectable" to="/">cam clickr</Link>
                <Link className="unselectable" to={`/photos/${currentUser.id}`}>Your Photostream</Link>
            </div>
            <div>
                <h1>Hi {currentUser.fname}</h1>
                <div className="dropdown">
                    <Link to="/login" className="logout" onClick={() => logout()}>Log out</Link>
                </div>
            </div>
        </div>
    );
    return (
        <div className={header}>
            {display}
        </div>
    );
}