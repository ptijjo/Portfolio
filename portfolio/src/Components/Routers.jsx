import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';
import Project1 from '../Pages/Projet1';
import Project2 from '../Pages/Projet2';
import Project3 from '../Pages/Projet3';
import Project4 from '../Pages/Projet4';
import Project5 from '../Pages/Projet5';
import Project6 from '../Pages/Projet6';
import { AnimatePresence } from 'framer-motion';

const Routers = () => {
    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/projet-1' element={<Project1 />} />
                    <Route path='/projet-2' element={<Project2 />} />
                    <Route path='/projet-3' element={<Project3 />} />
                    <Route path='/projet-4' element={<Project4 />} />
                    <Route path='/projet-5' element={<Project5 />} />
                    <Route path='/projet-6' element={<Project6 />} />


                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default Routers;