import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import Mouse from "../Components/Mouse";

const Projet6 = () => {

    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Projet num={5} />
                <Buttons left={"/projet-5"} right={"/contact"} />
            </div>
        </main>
    );
};

export default Projet6;