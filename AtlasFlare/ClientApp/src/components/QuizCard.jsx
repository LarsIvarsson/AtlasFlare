import React from 'react';
import '../styles/QuizCard.css';

function QuizCard({ flags, continent, currentIndex, altArray, setCurrentIndex })
{
    const currentFlag = flags[currentIndex];
    const currentContinent = continent.toUpperCase();
   
    function handleNextClick() {
        // lägg till kontroll av svar
        if (currentIndex < flags.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    if (!flags || !currentFlag || !altArray) {
        return <div>Loader...</div>
    }    

    return <div>
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
                        <button id="btn-next" onClick={handleNextClick} disabled={currentIndex === flags.length - 1}>
                            NEXT
                        </button>
                    </div>
                </div>
                <div className="answer-container">
                    {altArray.map((f) => (
                        <button key={f.flagId } className="btn-answer">{f.countryName}</button>
                    ))}
                </div>
                
            </div>
        </div>
    </div>
}
export default QuizCard;
