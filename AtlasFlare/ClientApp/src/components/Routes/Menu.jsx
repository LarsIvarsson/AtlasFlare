import React from 'react';
import { Link } from 'react-router-dom'
import "../../styles/Home.css";

function Menu()
{
    return (
        <div>
            <h2>Menu page</h2>
            <div className="content">
                <div className="card">
                    <h2>Europe</h2>
                    <Link to={"/quiz"}>Easy</Link>
                    <Link to={"/quiz"}>Medium</Link>
                    <Link to={"/quiz"}>Hard</Link>

                    <h2>South America</h2>
                    <Link to={"/quiz"}>Simple</Link>
                    <Link to={"/quiz"}>Mid</Link>
                    <Link to={"/quiz"}>Advanced</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu;