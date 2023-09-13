import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuizCard.css';

function QuizCard({ flags, continent, currentIndex, altArray, setCurrentIndex, lastIndex, chosenQuiz, signedInUsername })
{
    const currentFlag = flags[currentIndex];
    const currentContinent = continent.toUpperCase();
    const [chosenFlag, setChosenFlag] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [disabled, setDisabled] = useState(false);    
    const [answersArray, setAnswersArray] = useState([]);
    const [finishedQuiz, setFinishedQuiz] = useState(false);
    const [difficultyArray, setDifficultyArray] = useState([]);
    const [signedInUserId, setSignedInUserId] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        let slicedArray = flags.slice(0, lastIndex);
        setDifficultyArray(slicedArray);
    }, [flags, lastIndex])

    useEffect(() => {
        fetch(`user/${signedInUsername}/getId`)
            .then((res) => res.json())
            .then(data => setSignedInUserId(data))
    }, [signedInUsername]);

    function handleClick(e) {
        document.getElementById("btn-next").classList.remove("grayed-out-btn");

        if (currentIndex === lastIndex - 1) {
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
        let highScore = calculateHighScore();
        console.log(highScore);

        let answerString = JSON.stringify(answersArray);
        localStorage.setItem("result", answerString);
        navigate("/result", { state: { difficultyArray, highScore } });
    }
  
    function handleNextClick() {
        document.getElementById("btn-next").classList.add("grayed-out-btn");
        // lägg till kontroll av svar

        if (currentIndex < lastIndex && isClicked === true && disabled === true) {
            setCurrentIndex(currentIndex + 1);
            setIsClicked(!isClicked);
            setDisabled(false);
            document.getElementById(`${chosenFlag}`).classList.remove("greenColor", "redColor");
        }
    }

    function calculateHighScore() {
        let highScore = 0;

        difficultyArray.map((f, index) => {
            if (difficultyArray[index].countryName === answersArray[index]) {
                return highScore++;
            }
            else {
                return highScore;
            }
        });

        saveHighScore(highScore);
        return highScore;
    }

    function saveHighScore(highScore) {
        const quiz = { Difficulty: chosenQuiz, HighScore: highScore }
        fetch(`user/${signedInUserId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quiz)
        })
    }

    if (!flags || !currentFlag || !altArray || !lastIndex) {
        return <div>Loadering...</div>
    }   

    return (
        <div>
            <div className="quiz-content">
                <div className="info-card">
                    <p id="continent-name">{currentContinent}</p>
                    <p id="progress">{currentIndex + 1} / {lastIndex}</p>
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
                            <button id="btn-next" className="grayed-out-btn" onClick={handleNextClick} disabled={currentIndex === lastIndex}>
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
