import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import NotFound from '../Pages/NotFound';
import Project1 from '../Pages/Projet1';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
                <Route path='/projet-1' element={<Project1 />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Routers;