import React, { useEffect, useState } from 'react';
import '../styles/QuizCard.css';

function QuizCard({ flags }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log(flags);
    }, [flags])

    function handleNextClick() {
        if (currentIndex < flags.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function handlePrevClick() {
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
            <div className="content">
                <div className="card">
                    <img className="quiz-flag" src={flags[currentIndex].imageUrl} alt={currentFlag.countryName} />
                    <h3>{currentFlag.countryName}</h3>
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