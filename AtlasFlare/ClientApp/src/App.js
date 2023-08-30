import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Routes/Menu'
import Home from './components/Routes/Home';
import Login from './components/Routes/Login';
import Register from './components/Routes/Register';
import Quiz from './components/Routes/Quiz';
import './custom.css';
import './styles/Home.css';


function App() {
    return (
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />          
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register /> } />
            <Route path="/quiz" element={<Quiz /> } />
            </Routes>
    );
}

export default App;