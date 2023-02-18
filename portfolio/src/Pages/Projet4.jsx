import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import Mouse from "../Components/Mouse";

const Projet4 = () => {

    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Buttons left={"/projet-3"} right={"/projet-5"} />
                <Projet num={3} />
            </div>
        </main>
    );
};

export default Projet4;