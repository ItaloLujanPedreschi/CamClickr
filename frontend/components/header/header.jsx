import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
        this.props.history.push("/login");
    }

    render() {
        const { currentUser } = this.props;
        const login = <Link className="login" to="/login">Log In</Link>
        const signup = <Link className="signup" to="/signup">Sign Up</Link>
        const display = currentUser ? (
            <div className="logged-in-header">
                <Link className="home unselectable" to="/">cam clickr</Link>
                <Link className="home unselectable" to="/explore">Explore</Link>
                <ul className="user-actions-list">
                    <li>
                        <Link to="/photos/upload">Upload</Link>
                    </li>
                    <li>
                        <h1>Hi {currentUser.fname}</h1>
                        <div className="dropdown">
                            <Link to="/login" className="logout" onClick={this.handleLogout}>Log out</Link>
                        </div>
                    </li>
                </ul>
            </div>
        ) : (
                <div className="logged-out-header">
                    <Link className="home unselectable" to="/">cam clickr</Link>
                    <div className="login-signup">
                        {login}
                        {signup}
                    </div>
                </div>
            );
        return (
            <div className="header">
                {display}
            </div>
        );
    }
}

export default Header;