﻿import React, { useEffect, useState } from 'react';
import '../styles/QuizCard.css';

function QuizCard({ flags }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [random1, setRandom1] = useState(0);
    const [random2, setRandom2] = useState(0);
    const currentFlag = flags[currentIndex];
    const altFlag1 = flags[random1];
    const altFlag2 = flags[random2];

    useEffect(() => {
        setRandom1(getRandom(flags.length - 1));
        setRandom2(getRandom(flags.length - 1));
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
                <div className="quiz-card">
                    <img className="quiz-flag" src={currentFlag.imageUrl} alt={currentFlag.countryName} />
                    <h3>{currentIndex + 1} / {flags.length }: {currentFlag.countryName}</h3>
                    <button onClick={handlePrevClick} disabled={currentIndex === 0}>
                        Previous
                    </button>
                    <button onClick={handleNextClick} disabled={currentIndex === flags.length - 1}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizCard;