import React from 'react';
import { Route, Routes } from 'react-router-dom';

/*import Login from './components/Routes/Login';*/

import Menu from './components/Routes/Menu'
import Home from './components/Routes/Home';
import Login from './components/Routes/Login';

import Register from './components/Routes/Register';
import Navbar from './components/Navbar';
import './custom.css';
import './styles/Home.css';
import "../src/styles/Home.css";
import "../src/styles/Register.css"




function App() {
    return (
        <div>
            <Navbar />
            <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />          
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register /> } />

            </Routes>
        </div>

    );
}

export default App;