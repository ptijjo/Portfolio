import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import { data } from '../Data/data';
const Projet1 = () => {


    console.log(data)
    return (
        <div>
            <Navigation />
            <Buttons left={"/"} right={"/projet-2"} />
            <Projet num={0} />
        </div>

    );
};

export default Projet1;