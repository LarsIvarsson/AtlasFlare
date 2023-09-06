import React, { useEffect, useState } from 'react';
import '../styles/QuizCard.css';

function QuizCard({ flags, continent }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [random1, setRandom1] = useState(0);
    const [random2, setRandom2] = useState(0);
    const [random3, setRandom3] = useState(0);
    const currentFlag = flags[currentIndex];
    const altFlag1 = flags[random1];
    const altFlag2 = flags[random2];
    const altFlag3 = flags[random3];
    const currentContinent = continent.toUpperCase();;

    useEffect(() => {
        setRandom1(getRandom(flags.length - 1));
        setRandom2(getRandom(flags.length - 1));
        setRandom3(getRandom(flags.length - 1));
    }, [flags, currentIndex])

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    function handleNextClick() {
        // lägg till kontroll av svar
        if (currentIndex < flags.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function handlePrevClick() {
        // kanske inte ska vara med?
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    if (!currentFlag || !altFlag1 || !altFlag2) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="quiz-content">
                <div className="info-card">
                    <p id="continet-name">{currentContinent}</p>
                    <p id="progress">{currentIndex + 1} / {flags.length}</p>
                </div>
                <div className="quiz-card">
                    <div className="country-container">
                        <div className="flag-container">
                            <img className="quiz-flag" src={currentFlag.imageUrl} alt={currentFlag.countryName} />
                        </div>
                        <div className="btn-container">
                            <button id="btn-prev" onClick={handlePrevClick} disabled={currentIndex === 0}>
                                PREVIOUS
                            </button>
                            <button id="btn-next" onClick={handleNextClick} disabled={currentIndex === flags.length - 1}>
                                NEXT
                            </button>
                        </div>
                    </div>
                    <div className="answer-container">
                        <button className="btn-answer">{currentFlag.countryName}</button>
                        <button className="btn-answer">{altFlag1.countryName}</button>
                        <button className="btn-answer">{altFlag2.countryName}</button>
                        <button className="btn-answer">{altFlag3.countryName}</button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCard;