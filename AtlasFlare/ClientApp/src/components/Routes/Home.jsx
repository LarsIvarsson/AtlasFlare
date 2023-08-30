import React from 'react';





import { Link } from 'react-router-dom'
import "../../styles/Home.css";


function Home() {
    return (
        <div>

            <div className="navbar">
                <h1>Navigation Bar</h1>
            </div>
            <div className="content">
                <div className="card">
                    <div className="button-container">
                        <button id="btn1">LOG IN</button>
                        <button id="btn2">REGISTER</button>
                    </div>
                    
                </div>
            </div>

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