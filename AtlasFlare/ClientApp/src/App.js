import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Routes/Home';
import Names from './components/Routes/Names';
/*import Login from './components/Routes/Login';*/
import Register from './components/Routes/Register';
import Navbar from './components/Navbar';
import './custom.css';
import './styles/Home.css';
import "../src/styles/Home.css";




function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/names" element={<Names />} />
                {/*<Route path="/login" element={<Login />} />*/}
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>

    );
}

export default App;