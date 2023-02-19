import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import Mouse from "../Components/Mouse";

const Projet5 = () => {

    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Projet num={4} />
                <Buttons left={"/projet-4"} right={"/projet-6"} />
            </div>
        </main>
    );
};

export default Projet5;