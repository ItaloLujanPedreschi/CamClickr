import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const login = <Link to="/login">Log In</Link>
    const signup = <Link to="/signup">Sign Up</Link>
    const startForFree = <Link to="/signup">Start for free</Link>
    const display = currentUser ? (
        <div>
            <h1>Hi {currentUser.username}</h1>
        </div>
    ) : (
        <div>
            {login}
            {signup}
            {startForFree}
        </div>
    );
    return (
        <div>
            {display}
        </div>
    );
}