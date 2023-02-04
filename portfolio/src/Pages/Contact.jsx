import React from 'react';
import ContactForm from '../Components/ContactForm';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import Buttons from "../Components/Buttons";

const Contact = () => {
    return (
        <div className='contact-container'>
            <Mouse />
            <div className="contact">
                <Navigation />
                <ContactForm />
                <Buttons left={"/projet-1"} />
            </div>
        </div>
    );
};

export default Contact;