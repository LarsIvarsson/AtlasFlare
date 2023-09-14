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
                    <h2 className="h2-header">NORTH AMERICA</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/North%20America"} state={{ number: "4", chosenQuiz: 16 }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/North%20America"} state={{ number: "5", chosenQuiz: 17 }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/North%20America"} state={{ number: "7", chosenQuiz: 18 }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2 className="h2-header">SOUTH AMERICA</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/South%20America"} state={{ number: "6", chosenQuiz: 1 }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/South%20America"} state={{ number: "10", chosenQuiz: 2 }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/South%20America"} state={{ number: "14", chosenQuiz: 3 }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2 className="h2-header">EUROPE</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/europe"} state={{ number: "10", chosenQuiz: 4 }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/europe"} state={{ number: "20", chosenQuiz: 5 }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/europe"} state={{ number: "53", chosenQuiz: 6 }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2 className="h2-header">AFRICA</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/africa"} state={{ number: "10", chosenQuiz: 7 }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/africa"} state={{ number: "25", chosenQuiz: 8 }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/africa"} state={{ number: "54", chosenQuiz: 9 }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2 className="h2-header">ASIA</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/asia"} state={{ number: "10", chosenQuiz: 10 }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/asia"} state={{ number: "20", chosenQuiz: 11 }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/asia"} state={{ number: "48", chosenQuiz: 12 }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2 className="h2-header">OCEANIA</h2>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/oceania"} state={{ number: "5", chosenQuiz: 13 }} >EASY <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/oceania"} state={{ number: "8", chosenQuiz: 14 }} >MEDIUM <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                            <li className="menu-li"><Link className="quiz-link" to={"/quiz/oceania"} state={{ number: "14", chosenQuiz: 15 }} >HARD <FontAwesomeIcon icon={faChevronRight} className="arrow" /></Link></li>
                        </ul>
                    </div>
              </div>  
            </div>
        </div>
    )
}

export default Menu;