import React from 'react';
import { Link } from 'react-router-dom';
import Password from './../password/password';

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
        console.log(this.props.errors);
        debugger;
        return e => {
            for (let i = 0; i < this.props.errors.length; i++) {
                if (this.props.errors[i].includes(e.target.id)) {
                    this.props.errors.splice(i, 1);
                }
            };
            this.setState({ [field]: e.target.value });
        }
    }

    // handleErrors() {
    //     for (let i = 0; i < this.props.errors.length; i++) {
    //         if (this.props.errors[i].split('Fname').length > 1) {
    //             return 
    //         } else if (this.props.errors[i].split('Lname').length > 1) {

    //         } else if (this.props.errors[i].split('Age').length > 1) {

    //         } else if (this.props.errors[i].split('Email').length > 1) {

    //         } else if (this.props.errors[i].split('Password').length > 1) {

    //         }
    //     };
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render() {
        let formHead;
        let formSubmit;
        let link;
        if (this.props.formType === 'signup') {
            formHead = <p className="form-head">Sign up for Cam Clickr</p>
            formSubmit = 'Sign up'
            link = (
                <div className="redirect-to-login">
                    <p className="form-footer-text">
                        Already a Cam Clickr member?
                        <Link
                            to='/login'
                            className="form-footer-link"
                        > Log in here.</Link>
                    </p>
                </div>
            );
        } else {
            formHead = <p className="form-head">Log in to Cam Clickr</p>
            formSubmit = 'Sign in'
            link = (
                <div className="redirect-to-signup">
                    <p className="form-footer-text">
                        Not a Cam Clickr member? 
                        <Link
                            to='/signup'
                            className="form-footer-link"
                        > Sign up here.</Link>
                    </p>
                </div>
            );
        }

        const errorsString = this.props.errors.join(" ");

        return (
            <div className="form-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    {formHead}
                    <div className="form-inputs">
                        {this.props.formType === 'signup' ? (
                            <div>
                                <div className={errorsString.includes('Fname') ? "form-input error" : "form-input"}
                                    onClick={this.handleClick}
                                    >
                                    <input
                                        className="text-inputs"
                                        type="text"
                                        id="fname"
                                        value={this.state.fname}
                                        onChange={this.update("fname")}
                                    />
                                    <label
                                        className="signup-form-label cursor-text unselectable"
                                        htmlFor="fname"
                                    >First name</label>
                                </div>
                                <div className={errorsString.includes('Lname') ? "form-input error" : "form-input"}>
                                    <input
                                        className="text-inputs"
                                        type="text"
                                        id="lname"
                                        value={this.state.lname}
                                        onChange={this.update("lname")}
                                    />
                                    <label
                                        className="signup-form-label cursor-text unselectable"
                                        htmlFor="lname"
                                    >Last name</label>
                                </div>
                                <div className={errorsString.includes('Age') ? "form-input error" : "form-input"}>
                                    <input
                                        className="text-inputs"
                                        type="number"
                                        id="age"
                                        value={this.state.age}
                                        onChange={this.update("age")}
                                    />
                                    <label
                                        className="signup-form-label cursor-text unselectable"
                                        htmlFor="age"
                                    >Your age</label>
                                </div>
                            </div>
                        ) : (null)
                        }
                        <div className={errorsString.includes('Email') ? "form-input error" : "form-input"}>
                            <input
                                className="text-inputs"
                                type="text"
                                id="email"
                                value={this.state.email}
                                onChange={this.update("email")}
                            />
                            <label
                                className="signup-form-label cursor-text unselectable"
                                htmlFor="email"
                            >Email address</label>
                        </div>
                        <Password errors={this.props.errors} />
                        <input
                        className="cursor-button"
                            type="submit"
                            value={formSubmit}
                        />
                    </div>
                    <div className="form-footer">
                        <hr className="solid" />
                        {link}
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;