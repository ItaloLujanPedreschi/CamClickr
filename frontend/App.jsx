import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from './util/route_util';
import HeaderContainer from './components/header/header_container';
import HomeHeaderContainer from './components/header/home_header_container';
import EmptyHeaderContainer from './components/header/empty_header_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import LoginFormContainer from './components/session_form/login_form_container';

const App = () => (
    <div className="body">
        <header>
            <Switch>
                <Route exact path="/" component={HomeHeaderContainer} />
                <Route exact path="/signup" component={EmptyHeaderContainer} />
                <Route exact path="/login" component={EmptyHeaderContainer} />
                <Route path="/" component={HeaderContainer} />
            </Switch>
        </header>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
);

export default App;