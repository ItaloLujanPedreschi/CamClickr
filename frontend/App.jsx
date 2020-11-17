import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import GreetingContainer from './components/greeting/greeting_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import LoginFormContainer from './components/session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Welcome to Cam Clickr!</h1>
            <GreetingContainer />
        </header>

        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
);

export default App;