import React from 'react';
import { Link } from 'react-router-dom';

class UploadHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserDropdown = this.handleUserDropdown.bind(this);
    }

    handleUserDropdown() {
        document.getElementById("logout-dropdown").classList.toggle("show");
        document.getElementById("logout-arrow-up").classList.toggle("show");
        document.getElementById("logout-arrow-up-border").classList.toggle("show");
    }

    render() {
        const { currentUser, logout } = this.props;
        const header = currentUser ? "logged-in-home-header" : "logged-out-home-header";
        const display = (
            <div className="upload-header">
                <div>
                    <Link className="home unselectable" to="/"><span className="blue">cam click</span><span className="pink">r</span></Link>
                    <Link className="upload-photostream-button unselectable" to={`/photos/${currentUser.id}`}>Your Photostream</Link>
                </div>
                <div>
                    <button
                        onClick={this.handleUserDropdown}
                        className="dropdown-button upload-user-button"
                    >Hi {currentUser.fname}</button>
                    <div id="logout-arrow-up-border" className="upload-arrow-up-border arrow-up"></div>
                    <div id="logout-arrow-up" className="upload-arrow-up arrow-up"></div>
                    <div id="logout-dropdown" className="upload-dropdown">
                        <div className="user-actions-items">
                            <Link to="/login" className="logout" onClick={() => logout()}>Sign Out</Link>
                        </div>
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
}

export default UploadHeader;