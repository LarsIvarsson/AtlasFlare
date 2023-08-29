import React from 'react';
import { Link } from 'react-router-dom'
import "../../styles/Home.css";

function Home() {
    return (
        <div>
            <h1 className="text-center">WELCOME TO ATLAS FLARE</h1>
            <hr/>
            <Link to={"/register"}>REGISTER</Link>
            <hr/>
            <Link to={"/login"}>LOGIN</Link>
            <hr />
            <Link to={"/names"}>FLAGS</Link>
        </div>
    );
}

export default Home;