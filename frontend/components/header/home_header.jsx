import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './../greetings/greeting';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaPortrait } from 'react-icons/fa';

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserDropdown = this.handleUserDropdown.bind(this);
    }

    handleUserDropdown() {
        document.getElementById("logout-dropdown").classList.toggle("show");
        document.getElementById("logout-arrow-up").classList.toggle("show");
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
                    <Link className="home unselectable" to="/">
                        <img src={`${window.logo}`} />
                        cam clickr
                    </Link>
                    <ul className="home-nav">
                        <li className="home-nav-item you-dropdown">
                            <Link className="you-dropdown-link unselectable" to={`/photos/${currentUser.id}`}>You</Link>
                            <div className="you-arrow-up"></div>
                            <div className="you-dropdown-content">
                                <div className="you-dropdown-submenu">
                                    <Link className="unselectable" to={`/photos/${currentUser.id}`}>Photostream</Link>
                                    <Link className="unselectable" to={`/photos/${currentUser.id}/albums`}>Albums</Link>
                                </div>
                            </div>
                        </li>
                        <li className="home-nav-item"><Link className="unselectable" to="/explore">Explore</Link></li>
                    </ul>
                </div>
                <ul className="user-actions-list">
                    <li className="header-link">
                        <a href="https://github.com/ItaloLujanPedreschi/CamClickr" target="_blank">
                            <AiFillGithub className="header-icon" />
                        </a>
                    </li>
                    <li className="header-link">
                        <a href="https://www.linkedin.com/in/italo-lujan-pedreschi-98169373/" target="_blank">
                            <AiFillLinkedin className="header-icon" />
                        </a>
                    </li>
                    <li className="header-link">
                        <a href="https://italolujanpedreschi.github.io/" target="_blank">
                            <FaPortrait className="header-icon" />
                        </a>
                    </li>
                    <li>
                        <Link to="/photos/upload">
                            <img src={`${window.uploadButton}`} />
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={this.handleUserDropdown}
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
                <div className="home-logged-out-header">
                    <div className="logo-area">
                        <img src={`${window.logo}`} />
                        <Link className="home unselectable" to="/">cam clickr</Link>
                    </div>
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
}

export default HomeHeader;