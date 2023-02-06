import React, { useState } from 'react';
import { data } from '../Data/data';

const Projet = (props) => {
    const num = props.num;

    const [projet] = useState(data[num])

    console.log(projet)
    return (
        <div>
            {projet.titre}
        </div>
    );
};

export default Projet;