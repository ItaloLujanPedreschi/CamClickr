import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const login = <Link className="login" to="/login">Log In</Link>
    const signup = <Link className="signup" to="/signup">Sign Up</Link>
    
    // const startForFree = <Link to="/signup">Start for free</Link>
    const display = currentUser ? (
        <div className="logged-in-header">
            <Link className="home" to="/">cam clickr</Link>
            <h1>Hi {currentUser.fname}</h1>
            <button className="logout" onClick={logout}>Log out</button>
        </div>
    ) : (
        <div className="logged-out-header">
            <Link className="home" to="/">cam clickr</Link>
            <div className="login-signup">
                {login}
                {signup}
            </div>
            {/* {startForFree} */}
        </div>
    );
    return (
        <div className="header">
            {display}
        </div>
    );
}