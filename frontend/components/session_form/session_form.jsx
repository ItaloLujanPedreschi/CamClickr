import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            age: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render() {
        let formHead;
        let formSubmit;
        let link;
        if (this.props.formType === 'signup') {
            formHead = 'Sign up for Cam Clickr';
            formSubmit = 'Sign up'
            link = (
                <div>
                    <p>Already a Cam Clickr member?</p>
                    <Link to='/login'>Log in here.</Link>
                </div>
            );
        } else {
            formHead = 'Log in to Cam Clickr';
            formSubmit = 'Sign in'
            link = (
                <div>
                    <p>Not a Cam Clickr member?</p>
                    <Link to='/signup'>Sign up here.</Link>
                </div>
            );
        }

        return (
            <form onSubmit={this.handleSubmit}>
                {formHead}
                {this.props.formType === 'signup' ? (
                    <div>
                        <input
                            type="text"
                            placeholder="First name"
                            value={this.state.fname}
                            onChange={this.update("fname")}
                            />
                        <input
                            type="text"
                            placeholder="Last name"
                            value={this.state.lname}
                            onChange={this.update("lname")}
                            />
                        <input
                            type="text"
                            placeholder="Your age"
                            value={this.state.age}
                            onChange={this.update("age")}
                        />
                    </div>
                ) : (null)
                }
                <input
                    type="text"
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.update("email")}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update("password")}
                />
                <input
                    type="submit"
                    value={formSubmit}
                />
                {link}
            </form>
        )
    }
}

export default SessionForm;