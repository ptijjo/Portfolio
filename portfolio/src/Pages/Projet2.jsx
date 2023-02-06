import React from 'react';
import Buttons from '../Components/Buttons';
import Navigation from '../Components/Navigation';
import Projet from '../Components/Projet';
import { data } from '../Data/data';
const Projet2 = () => {


    console.log(data)
    return (
        <div>
            <Navigation />
            <Buttons left={"/projet-1"} right={"/projet-3"} />
            <Projet num={1} />
        </div>

    );
};

export default Projet2;