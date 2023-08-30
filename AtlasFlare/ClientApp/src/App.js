import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Routes/Menu'
import Home from './components/Routes/Home';
import Login from './components/Routes/Login';
import Register from './components/Routes/Register';
import './custom.css';
import './styles/Home.css';


function App() {
    return (
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />          
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register /> } />
            </Routes>
    );
}

export default App;