import React from 'react';
import { Link } from 'react-router-dom';
import { BiShow, BiHide } from 'react-icons/bi';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                fname: "",
                lname: "",
                age: "",
                email: "",
                password: ""
            },
            errors: [],
            hidden: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setErrors = this.setErrors.bind(this);
        this.processErrors = this.processErrors.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    processErrors(id) {
        for (let i = 0; i < this.state.errors.length; i++) {
            let currentError = this.state.errors[i];
            let checkError = currentError.toLowerCase();
            if (checkError.includes(id)) {
                let newErrors = Array.from(this.state.errors);
                newErrors.splice(i, 1);
                this.setState({ errors: newErrors });
            }
        };
    }

    update(field) {
        return e => {
            this.setState(prevState => ({
                ...prevState,
                form: {
                    ...prevState.form,
                    [field]: e.target.value
                }
            }), this.processErrors(e.target.id));
        }
    }

    togglePassword(e) {
        e.preventDefault();
        this.setState({ hidden: !this.state.hidden })
    }

    setErrors(errors) {
        this.setState({ errors });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state.form).then(null, errors => this.setErrors(errors.errors));
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { email: "demo@mail.com", password: "password" };
        this.props.processForm(demoUser);
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

        
        let demonstrationLogin;
        if (this.props.formType === 'signup') {
            demonstrationLogin = null;
        } else {
            demonstrationLogin = (
                <button
                    className="login-demo-login cursor-button"
                    onClick={this.handleDemo}
                >Demo Log In</button>
            );
        }

        const errorsString = this.state.errors.join(" ");

        return (
            <div className="form-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <img src={`${window.logo}`} />
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
                                        value={this.state.form.fname}
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
                                        value={this.state.form.lname}
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
                                        value={this.state.form.age}
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
                                value={this.state.form.email}
                                onChange={this.update("email")}
                            />
                            <label
                                className="signup-form-label cursor-text unselectable"
                                htmlFor="email"
                            >Email address</label>
                        </div>
                        <div className={errorsString.includes('Password') ? "form-input error" : "form-input"}>
                            <input
                                className="text-inputs"
                                type={this.state.hidden ? 'password' : 'text'}
                                id="password"
                                value={this.state.form.password}
                                onChange={this.update("password")}
                            />
                            <label
                                className="signup-form-label cursor-text unselectable"
                                htmlFor="password"
                            >Password</label>
                            <button
                                className="password-toggle"
                                onClick={this.togglePassword}
                            >{this.state.hidden ? <BiShow className="icon" /> : <BiHide className="icon" />}</button>
                        </div>
                        <input
                            className="cursor-button"
                            type="submit"
                            value={formSubmit}
                        />
                        {demonstrationLogin}
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