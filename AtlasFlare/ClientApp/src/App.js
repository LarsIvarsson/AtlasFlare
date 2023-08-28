
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home'
import Names from './components/Names'
import './custom.css';
import './styles/Home.css';



function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/names" element={<Names />} />
            </Routes>
    );
}

export default App;