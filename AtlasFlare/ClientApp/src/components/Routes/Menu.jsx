import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/Menu.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu()
{
    return (
        <div>
            
            <div className="card-container">
                <div className="menu-card">
                    <h2>SOUTH AMERICA</h2>
                    <div className="menu-links">
                        <ul>
                            <li calssName="difficulty"><Link className="quiz-link" to={"/quiz"}>EASY</Link><FontAwesomeIcon icon={faChevronRight} className="arrow" /></li>
                            <li><Link className="quiz-link" to={"/quiz"}>MEDIUM</Link><FontAwesomeIcon icon={faChevronRight} className="arrow" /></li>
                            <li><Link className="quiz-link" to={"/quiz"}>HARD</Link><FontAwesomeIcon icon={faChevronRight} className="arrow" /></li>
                        </ul>
                        
                        
                       
                    </div>
                    
                </div>
                <div className="menu-card">
                    <h2>EUROPE</h2>
                    <div className="menu-links">
                        <ul>
                            <li><Link className="quiz-link" to={"/quiz"}>EASY</Link><FontAwesomeIcon icon={faChevronRight} className="arrow" /></li>
                            <li><Link className="quiz-link" to={"/quiz"}>MEDIUM</Link><FontAwesomeIcon icon={faChevronRight} className="arrow" /></li>
                            <li><Link className="quiz-link" to={"/quiz"}>HARD</Link><FontAwesomeIcon icon={faChevronRight} className="arrow" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;