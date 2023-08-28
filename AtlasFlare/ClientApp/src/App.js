import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Routes/Home'
import Names from './components/Routes/Names'
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