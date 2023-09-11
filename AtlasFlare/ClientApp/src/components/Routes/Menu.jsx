import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Menu.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
    return (
        <div>            
            <div className="card-container">
                <div className="menu-card">
                    <h2>SOUTH AMERICA</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/South%20America"} state={{ number: "6" }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/South%20America"} state={{ number: "10" }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/South%20America"} state={{ number: "14" }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2>EUROPE</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/europe"} state={{ number: "10" }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/europe"} state={{ number: "20" }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/europe"} state={{ number: "53" }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;