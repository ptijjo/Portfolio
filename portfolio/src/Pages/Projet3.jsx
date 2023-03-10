import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import Mouse from "../Components/Mouse";

const Projet3 = () => {

    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Projet num={2} />
                <Buttons left={"/projet-2"} right={"/projet-4"} />
            </div>
        </main>
    );
};

export default Projet3;