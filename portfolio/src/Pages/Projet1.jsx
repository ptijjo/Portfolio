import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import Mouse from "../Components/Mouse";
import { data } from '../Data/data';
const Projet1 = () => {


    console.log(data)
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Buttons left={"/"} right={"/projet-2"} />
                <Projet num={0} />
            </div>
        </main>
    );
};

export default Projet1;