import React from 'react';
import ContactForm from '../Components/ContactForm';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import Buttons from "../Components/Buttons";
import SocialNetwork from "../Components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <motion.h4 drag dragConstraints={{ left: -10, right: 5, top: -10, bottom: 10 }}>adresse</motion.h4>
                            <p>71 rue du Général de Gaulle</p>
                            <p>57800 cocheren</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <p>06-11-67-24-24</p>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <p>bangouraibrahima57@gmail.com</p>
                        </div>
                    </div>
                    <SocialNetwork />
                </div>
                <Buttons left={"/projet-1"} />
            </div>
        </main>
    );
};

export default Contact;