import React from 'react';
import '../styles/QuizCard.css';

function QuizCard({ flags, continent, currentIndex, altArray, setCurrentIndex })
{
    const currentFlag = flags[currentIndex];
    const currentContinent = continent.toUpperCase();
    const [isAltFlags, setIsAltFlags] = useState(false);
    const [altArray, setAltArray] = useState();
    const [allFlagsSet, setAllFlagsSet] = useState(false);
    const [flagOne, setFlagOne] = useState();
    const [flagTwo, setFlagTwo] = useState();
    const [flagThree, setFlagThree] = useState();
    const [flagFour, setFlagFour] = useState();
    const [chosenFlag, setChosenFlag] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [disabled, setDisabled] = useState(false);

    

    function handleClick(e) {
        document.getElementById("btn-next").classList.remove("grayed-out-btn");

        if (e.target.id === currentFlag.countryName) {
            document.getElementById(`${e.target.id}`).classList.add("greenColor");
        }

        else {
            document.getElementById(`${e.target.id}`).classList.add("redColor");
        }

        setChosenFlag(`${e.target.id}`);
        setIsClicked(!isClicked);
        setDisabled(true);
    }
  
      function handleNextClick() {
        document.getElementById("btn-next").classList.add("grayed-out-btn");
        // lägg till kontroll av svar
        if (currentIndex < flags.length - 1 && isClicked === true && disabled === true) {
            setCurrentIndex(currentIndex + 1);
            setIsClicked(!isClicked);
            setDisabled(false);
            document.getElementById(`${chosenFlag}`).classList.remove("greenColor", "redColor");
        }
    }


  
   if (!flags || !currentFlag || !altArray) {
    return <div>Loadering...</div>
}   

    return (
        <div>
            <div className="quiz-content">
                <div className="info-card">
                    <p id="continent-name">{currentContinent}</p>
                    <p id="progress">{currentIndex + 1} / {flags.length}</p>
                </div>
                <div className="quiz-card">
                    <div className="country-container">
                        <div className="flag-container">
                            <img className="quiz-flag" src={currentFlag.imageUrl} alt={currentFlag.countryName} />
                        </div>
                        <div className="btn-container">
                            <button id="btn-next" className="grayed-out-btn" onClick={handleNextClick} disabled={currentIndex === flags.length - 1}>
                                NEXT
                            </button>
                        </div>
                    </div>
                    {/*
                    {allFlagsSet ?
                        (<div className="answer-container">
                            <button id={flagOne} className="btn-answer" onClick={handleClick} disabled={disabled}>{flagOne}</button>
                            <button id={flagTwo} className="btn-answer" onClick={handleClick} disabled={disabled}>{flagTwo}</button>
                            <button id={flagThree} className="btn-answer" onClick={handleClick} disabled={disabled}>{flagThree}</button>
                            <button id={flagFour} className="btn-answer" onClick={handleClick} disabled={disabled}>{flagFour}</button>
                        </div>) :
                        (<div className="answer-container">
                        <button className="btn-answer">""</button>
                        <button className="btn-answer">""</button>
                        <button className="btn-answer">""</button>
                        <button className="btn-answer">""</button>
                    </div>)}    */}
                    <div className="answer-container">
                      {altArray.map((f) => (
                        <button key={f.flagId } id={f.countryName} className="btn-answer" onClick={handleClick} disabled={disabled}>{f.countryName}</button>
                        ))}
                    </div>
                </div>                
            </div>
        </div>
    </div>
}
export default QuizCard;
