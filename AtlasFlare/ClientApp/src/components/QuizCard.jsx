import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuizCard.css';

function QuizCard({ flags, continent, altArray, lastIndex, currentFlag, counter, increaseCounter, chosenQuiz })
{
    const currentContinent = continent.toUpperCase();
    const [chosenFlag, setChosenFlag] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [disabled, setDisabled] = useState(false);    
    const [answersArray, setAnswersArray] = useState([]);
    const [finishedQuiz, setFinishedQuiz] = useState(false);
    const [facitArray, setFacitArray] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let facitSlice = [...facitArray, currentFlag];
        setFacitArray(facitSlice);
    }, [currentFlag]);

    function handleClick(e) {
        document.getElementById("btn-next").classList.remove("grayed-out-btn");

        if (counter == lastIndex) {
            setFinishedQuiz(true);
        }

        if (e.target.id === currentFlag.countryName) {
            document.getElementById(`${e.target.id}`).classList.add("greenColor");
        }

        else {
            document.getElementById(`${e.target.id}`).classList.add("redColor");
        }

        setAnswersArray(answersArray => [...answersArray, e.target.id]);
        setChosenFlag(`${e.target.id}`);
        setIsClicked(!isClicked);
        setDisabled(true);
    }

    function seeResult() {
        calculateHighScore();

        let answerString = JSON.stringify(answersArray);
        localStorage.setItem("result", answerString);
        navigate("/result", { state: { facitArray } });
    }
  
    function handleNextClick() {
        document.getElementById("btn-next").classList.add("grayed-out-btn");

        if (counter < lastIndex && isClicked === true && disabled === true) {
            increaseCounter();
            setIsClicked(!isClicked);
            setDisabled(false);
            document.getElementById(`${chosenFlag}`).classList.remove("greenColor", "redColor");
        }
    }

    function calculateHighScore() {
        let highScore = 0;

        facitArray.map((f, index) => {
            if (facitArray[index].countryName === answersArray[index]) {
                console.log(highScore);
                return highScore++;
            }
            else {
                return highScore;
            }
        });

        saveHighScore(highScore);
    }

    function saveHighScore(highScore) {
        const quiz = { Difficulty: chosenQuiz, HighScore: highScore }
        fetch("user/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quiz)
        })
    }

    if (!flags || !currentFlag || !altArray || !lastIndex || !counter) {
        return <div>Loadering...</div>
    }   

    return (
        <div>
            <div className="quiz-content">
                <div className="info-card">
                    <p id="continent-name">{currentContinent}</p>
                    <p id="progress">{counter} / {lastIndex}</p>
                </div>
                <div className="quiz-card">
                    <div className="country-container">
                        <div className="flag-container">
                            <img className="quiz-flag" src={currentFlag.imageUrl} alt={currentFlag.countryName} />
                        </div>
                    </div>                    
                    <div className="answer-container">
                        {altArray.map((f) => (
                            <button
                                key={f.flagId}
                                id={f.countryName}
                                className="btn-answer"
                                onClick={handleClick}
                                disabled={disabled}>{f.countryName}
                            </button>)
                        )}
                    </div>
                    <div className="btn-container">
                        {finishedQuiz ? (
                            <button className="show-result-btn" onClick={seeResult}>
                                Result
                            </button>
                        ) : (
                            <button id="btn-next" className="grayed-out-btn" onClick={handleNextClick}>
                                NEXT
                            </button>
                        )}                                    
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default QuizCard;
