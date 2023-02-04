import React from 'react';
import Buttons from '../Components/Buttons';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import SocialNetwork from '../Components/SocialNetwork';

const Home = () => {
    return (
        <div>
            <Mouse />
            <Navigation />
            <SocialNetwork />
            <Buttons right={"/projet-1"} />
        </div>
    );
};

export default Home;