import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';

import './App.css';

const  App = () => {
    return (
        <>
            <Navbar/>
            <div className="content container">
                <Route exact path="/about" component={About}/>
                <Route exact path="/skills" component={Skills}/>
            </div>
        </>
    );
};

export default App;
