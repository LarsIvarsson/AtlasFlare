import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Result() {
    const [resultsArray, setResultsArray] = useState([]);
    const [arrays, setArrays] = useState(false);
    const { difficultyArray } = useLocation().state;
    let i = 0;
    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = event => {
        setScrollTop(event.currentTarget.scrollTop);
    };

    useEffect(() => {
        getResultsArray();
    }, [difficultyArray, arrays])

    function getResultsArray() {
        let resArray = localStorage.getItem("result");
        let parsedArray = JSON.parse(resArray);
        setResultsArray(parsedArray);
        setArrays(true);
    }

    return (
        <div>
            <div className="quiz-content">
                <div className="info-card">
                    <p id="continent-name"> RESULT: /{difficultyArray.length} </p>
                    
                </div>
                <div className="quiz-card">
                    <div className="result-container" style={{
                        border: 'none',
                        width: '800px',
                        height: '350px',
                        overflow: 'scroll',
                    }} onScroll={handleScroll}>
                        {arrays ? (<div>
                            {difficultyArray.map((f, index) => {
                                if (difficultyArray[index].countryName.toString() === resultsArray[index]) {
                                   
                                    return <div key={index} className="result-card">
                                        <div className="img-name">
                                            <img className="result-flag" src={f.imageUrl} alt="Hehe" />
                                            <div id="c-name">{f.countryName}</div>
                                        </div>

                                        <FontAwesomeIcon icon={faCheck} id="v-mark" />
                                    </div>
                                }
                                else {
                                    return <div key={index} className="result-card">
                                        <div className="img-name">
                                            <img className="result-flag" src={f.imageUrl} alt="Hehe" />
                                            <div>{f.countryName}</div>
                                        </div>
                                        
                                        <FontAwesomeIcon icon={faXmark} id="x-mark" />

                                    </div>
                                }
                            })}
                        </div>) : (<div></div>)}

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Result;