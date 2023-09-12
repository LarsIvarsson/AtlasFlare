import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Result() {
    const [resultsArray, setResultsArray] = useState([]);
    const [arrays, setArrays] = useState(false);
    const { difficultyArray } = useLocation().state;

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
                    <p id="continent-name"> New high score: </p>
                    <p id="progress">Current high score: </p>
                </div>
                <div className="quiz-card">
                    <div className="result-container">
                        {arrays ? (<div>
                            {difficultyArray.map((f, index) => {
                                if (difficultyArray[index].countryName.toString() === resultsArray[index]) {
                                    return <div key={index} className="result-card">
                                        <img className="result-flag" src={f.imageUrl} alt="Hehe" /> <div>{f.countryName}</div> <h3 id="statement">CORRECT</h3>       
                                    </div>
                                }
                                else {
                                    return <div key={index} className="result-card">
                                        <img className="result-flag" src={f.imageUrl} alt="Hehe" />  <div>{f.countryName}</div> <h3 id="statement">WRONG</h3>    
                                    </div>
                                }
                            })}
                        </div>) : (<div></div>) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;