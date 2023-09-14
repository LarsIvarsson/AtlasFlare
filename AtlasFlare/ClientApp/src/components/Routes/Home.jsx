import React from 'react';
import { Link } from 'react-router-dom'
import "../../styles/Home.css";

function Home() {
    return (
        <div>

            <div className="content-card">
                <div className="content">
                
                <div className="card">
                    <div className="button-container">
                        <Link to={"/login"}><button id="btn1">LOG IN</button></Link>
                        <Link to={"/register"}>
                            <button id="btn2" >REGISTER</button>
                        </Link>  
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;