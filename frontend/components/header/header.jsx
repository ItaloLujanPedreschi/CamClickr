import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './../greetings/greeting';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleDropdown() {
        document.getElementById("logout-dropdown").classList.toggle("show");
        document.getElementById("logout-arrow-up").classList.toggle("show");
    }

    handleLogout() {
        this.props.logout();
        this.props.history.push("/login");
    }

    render() {
        const { currentUser, logout, demoLogin } = this.props;

        const demoUser = { email: "demo@mail.com", password: "password" };
        const login = <Link className="login" to="/login">Log In</Link>
        const signup = <Link className="signup" to="/signup">Sign Up</Link>
        const header = currentUser ? "logged-in-home-header" : "logged-out-home-header";
        const display = currentUser ? (
            <div className="home-logged-in-header">
                <div className="logo-area">
                    <img src={`${window.logo}`} />
                    <Link className="home unselectable" to="/">cam clickr</Link>
                    <ul className="home-nav">
                        <li className="home-nav-item"><Link className="unselectable" to={`/photos/${currentUser.id}`}>You</Link></li>
                        <li className="home-nav-item"><Link className="unselectable" to="/explore">Explore</Link></li>
                    </ul>
                </div>
                <ul className="user-actions-list">
                    <li>
                        <Link to="/photos/upload">
                            <img src={`${window.uploadButton}`} />
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={this.handleDropdown}
                            className="dropdown-button"
                        >Hi {currentUser.fname}</button>
                        <div id="logout-arrow-up" className="arrow-up"></div>
                        <div id="logout-dropdown" className="dropdown">
                            <Greeting name={currentUser.fname} />
                            <div className="user-actions-items">
                                <Link to="/login" className="logout" onClick={() => logout()}>Log out</Link>
                            </div>
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
            <div className={header}>
                {display}
            </div>
        );
    }
}

export default Header;