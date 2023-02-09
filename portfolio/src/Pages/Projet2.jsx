import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import Mouse from "../Components/Mouse";
import { data } from '../Data/data';
const Projet2 = () => {


    console.log(data)
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Buttons left={"/projet-1"} right={"/projet-3"} />
                <Projet num={1} />
            </div>
        </main>
    );
};

export default Projet2;