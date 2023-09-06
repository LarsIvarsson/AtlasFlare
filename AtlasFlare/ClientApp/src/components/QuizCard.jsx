import React, { useEffect, useState } from 'react';
import '../styles/QuizCard.css';

function QuizCard({ flags }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log(flags);
    }, [flags])

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

    const currentFlag = flags[currentIndex];

    if (!currentFlag) {
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