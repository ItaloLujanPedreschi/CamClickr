import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { demoLogin } = this.props;
        const demoUser = { email: "demo@mail.com", password: "password" };

        return (
            <div className="home-page">
                <div className="home-body">
                    <div className="photo-1"></div>
                    <div className="photo-2"></div>
                    <div className="photo-3"></div>
                    <div className="photo-4"></div>
                </div>
                <div className="home-body-content">
                    <h1>Find your inspiration.</h1>
                    <h3>Join the Cam Clickr community, home to tens of billions of photos and 2 million groups.</h3>
                    <button id="home-button" className="home-button" onClick={() => demoLogin(demoUser)}>
                        Start for free
                    </button>
                </div>
            </div>
        )
    }
}

export default HomePage;