import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import HeaderContainer from './components/header/header_container';
import HomeHeaderContainer from './components/header/home_header_container';
import EmptyHeaderContainer from './components/header/empty_header_container';
import UploadHeaderContainer from './components/header/upload_header_container';
import PhotoShowHeaderContainer from './components/header/photo_show_header_container';
import SignupFormContainer from './components/session_form/signup_form_container';
import LoginFormContainer from './components/session_form/login_form_container';
import PhotosIndexContainer from './components/photos/photos_index_container';
import PhotoFormContainer from './components/photos/photo_form_container';
import FooterContainer from './components/footer/footer_container'
import UserShowContainer from './components/users/user_show_container';
import PhotoShowContainer from './components/photos/photo_show_container';
import HomePageContainer from './components/home_page/home_page_container';
import AlbumShowContainer from './components/albums/album_show_container';
import AlbumFormContainer from './components/albums/album_form_container';
import AlbumFormHeaderContainer from './components/albums/album_form_header_container';
import TagShowContainer from './components/tags/tag_show_container';

const App = () => (
    <div className="body background">
        <header>
            <Switch>
                <Route exact path="/" component={HomeHeaderContainer} />
                <Route exact path="/signup" component={EmptyHeaderContainer} />
                <Route exact path="/login" component={EmptyHeaderContainer} />
                 <ProtectedRoute path="/photos/organize/new_set" component={AlbumFormHeaderContainer} />
                <ProtectedRoute exact path="/photos/upload" component={UploadHeaderContainer} />
                <Route path="/photos/:displayName/albums" component={HeaderContainer} />
                <Route path="/photos/:displayName/:photoId" component={PhotoShowHeaderContainer} />
                <Route path="/" component={HeaderContainer} />
            </Switch>
        </header>
        <AuthRoute exact path="/" component={HomePageContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/explore" component={PhotosIndexContainer} />
        <Switch>
            <ProtectedRoute path="/photos/upload" component={PhotoFormContainer} />
            <ProtectedRoute path="/photos/organize/new_set" component={AlbumFormContainer} />
            <Route exact path="/photos/tag/:tagName" component={TagShowContainer} />
            <Route exact path="/photos/:userId" component={UserShowContainer} />
            <Route exact path="/photos/:userId/albums" component={UserShowContainer} />
            <Route exact path="/photos/:userId/albums/:albumId" component={AlbumShowContainer} />
            <Route path="/photos/:displayName/:photoId" component={PhotoShowContainer} />
        </Switch>
        <Route exact path="/" component={FooterContainer} />
    </div>
);

export default App;