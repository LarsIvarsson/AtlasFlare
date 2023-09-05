import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../images/atlasflagga.png';
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";


function Navbar() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const handleAuthentication = () => {
        setIsLoggedIn(!isLoggedIn); // Toggle the isLoggedIn state
    };
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //const handleAuthentication = () => {
    //    console.log("inloggad")
    //    setIsLoggedIn(!isLoggedIn); 
    //};

    return (
        <div>
           
            
            <Link to={"/"}>
                <img className="atlasflarelogo" src={logo} alt="" />
            </Link>
            <div
                className="hamburgermenu navigation"
                style={{ position: "relative" }}
            >
                {hamburgerOpen ? (
                    <ul style={{ position: "absolute", right: "2rem", bottom: -33 }}>
                        <Link to="/quiz">
                            <li className="item-style">QUIZ</li>
                        </Link>
                        <Link to="/register">
                            <li className="item-style">REGISTER</li>
                        </Link>
                        {isLoggedIn ? (
                            
                            <li className="item-style" onClick={handleAuthentication}>LOG OUT</li>
                        ) : (
                           
                            <Link to="/login">
                                <li className="item-style">LOG IN</li>
                            </Link>
                        )}
                        {/*<Link to="/login">*/}
                        {/*    <li className="item-style">LOG IN</li>*/}
                        {/*</Link>*/}
                    </ul>
                ) : (
                    ""
                )}
                <div className="hamburgermenu">
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>
                </div>
         
                <style jsx>
                    {`     
        
                    .navigation {
                    text-decoration: none;
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    float: right;
        
                    /* margin: 20 0px;
                    padding: 0 25px; */
                    }

                    .navigation ul {
                    display: ${hamburgerOpen ? "inline" : "none"}
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 20 0px;
                    padding: 0 25px; 
                    }

                    .navigation ul li {
                    list-style-type: none;
                    text-decoration: none;
                    padding-right: 10px;
                    }  `}
                </style>
                </div>
            
        </div>
    );
};

export default Navbar;

