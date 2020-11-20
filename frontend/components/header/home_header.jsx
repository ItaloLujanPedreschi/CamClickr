import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, demoLogin }) => {
    const demoUser = { email: "demo@mail.com", password: "password" };
    const login = <Link className="login" to="/login">Log In</Link>
    const signup = <Link className="signup" to="/signup">Sign Up</Link>
    const header = currentUser ? "logged-in-home-header" : "logged-out-home-header";
    const display = currentUser ? (
        <div className="home-logged-in-header">
            <Link className="home unselectable" to="/">cam clickr</Link>
            <div>
                <h1 className="greeting">Hi {currentUser.fname}</h1>
                <button className="logout" onClick={logout}>Log out</button>
            </div>
        </div>
    ) : (
        <div className="home-logged-out-header">
            <Link className="home unselectable" to="/">cam clickr</Link>
            <div className="login-signup">
                <button
                    className="demo-login cursor-button"
                    onClick={() => demoLogin(demoUser)}
                >Demo Log In</button>
                {login}
                {signup}
            </div>
        </div>
    );
    return (
        <div className={header}>
            {display}
        </div>
    );
}