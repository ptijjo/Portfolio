import React from 'react';
import { NavLink } from 'react-router-dom';

const Buttons = (props) => {

    const left = props.left;
    const right = props.right;


    return (
        <div className='scroll-bottom'>
            {left && <NavLink to={left} className="left hover"><span>&#10092;</span></NavLink>}

            {right && <NavLink to={right} className="right hover"><span>&#10093;</span></NavLink>}
        </div>
    );
};

export default Buttons;