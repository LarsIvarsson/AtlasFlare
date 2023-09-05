import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Routes/Menu'
import Home from './components/Routes/Home';
import Login from './components/Routes/Login';
import Register from './components/Routes/Register';
import Quiz from './components/Routes/Quiz';
import Navbar from './components/Navbar';
import NotFound from "./components/Routes/NotFound";
import './custom.css';
import './styles/Home.css';
import "../src/styles/Home.css";
import "../src/styles/Register.css"



function App() {
    const [signedIn, setSignedIn] = useState(false);
    

    useEffect(() => {
        if (localStorage.getItem("signedInUser")) {
            setSignedIn(true);
        }
    }, []);

    function changeSignedIn() {
        setSignedIn(!signedIn);
    }

    return (
        <div>
            <Navbar changeSignedIn={changeSignedIn} signedIn={signedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />          
                <Route path="/login" element={<Login changeSignedIn={changeSignedIn} />} />
                <Route path="/register" element={<Register /> } />
                <Route path="/quiz/:continent" element={<Quiz /> } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default App;