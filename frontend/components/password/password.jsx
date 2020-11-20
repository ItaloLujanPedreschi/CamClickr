import React from 'react';
import { BiShow, BiHide } from 'react-icons/bi';

class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            password: ''
        };
        this.togglePassword = this.togglePassword.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updatePassword(e) {
        this.setState({ password: e.target.value });
    }

    togglePassword(e) {
        e.preventDefault();
        this.setState({ hidden: !this.state.hidden })
    }

    render() {
        const errorsString = this.props.errors.join(" ");
        console.log(errorsString);
        return (
            <div className={errorsString.includes('Password') ? "password-input-container error" : "password-input-container"}>
                <input
                    className="password-input"
                    type={this.state.hidden ? 'password' : 'text'}
                    id="password"
                    value={this.state.password}
                    onChange={this.updatePassword}
                />
                <label
                    className="signup-form-label cursor-text unselectable"
                    htmlFor="password"
                >Password</label>
                <button
                    className={this.state.hidden ? "password-toggle" : "password-toggle"}
                    onClick={this.togglePassword}
                >{this.state.hidden ? <BiShow className="icon" /> : <BiHide className="icon" />}</button>
            </div>
        );
    }
}

export default Password;