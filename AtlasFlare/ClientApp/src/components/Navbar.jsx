import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../images/atlasflagga.png';
import Hamburger from "./Hamburger";
import { useEffect, useState } from "react";


function Navbar(props) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(props.signedIn);
    const [username, setUsername] = useState(props.username);

    useEffect(() => {
        setIsSignedIn(props.signedIn);
    }, [props.signedIn]);

    useEffect(() => {
        setUsername(props.username);
    }, [props.username])

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    function logOut() {
        if (isSignedIn) {
        sessionStorage.removeItem("signedInUser");
        props.changeSignedIn();        
        }
    }


    return (
        <div>
            {isSignedIn ? <Link to={"/menu"}>
                <img className="atlasflarelogo" src={logo} alt="" />
            </Link> : <Link to={"/"}>
                <img className="atlasflarelogo" src={logo} alt="" />
            </Link> }
            
            <div className="hamburgermenu navigation" style={{ position: "relative" }}>
                {hamburgerOpen ? (
                    <ul style={{ position: "absolute", right: "2rem", bottom: -33 }}>
                        {/*quiz link*/}
                        {isSignedIn ? (
                            <Link to="/menu">
                                <li className="item-style">QUIZ</li>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <li className="item-style">QUIZ</li>
                            </Link> )}
                        {/*user page/register page*/}
                        {isSignedIn ? (
                            <Link to={`user/${username}`}>
                                <li className="item-style">USER PAGE</li>
                            </Link>
                        ) : (
                            <Link to="/register">
                                <li className="item-style">REGISTER</li>
                            </Link> )}                                                
                        {/*log in/log out*/}
                        <Link to="/login" >
                            <li onClick={logOut} className="item-style">{isSignedIn ? ("LOG OUT") : ("LOG IN")}</li>
                        </Link>
                    </ul>
                ) : (
                    ""
                )}
                <div className="hamburgermenu">
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>
                </div>
         
                <style jsx="true">
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
                    padding: 0 25px 0 0; 
                    
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

