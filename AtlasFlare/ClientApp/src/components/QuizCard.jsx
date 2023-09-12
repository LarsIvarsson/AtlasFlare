//import React, { useEffect, useState } from 'react';
//import '../styles/QuizCard.css';

//function QuizCard({ flags, continent }) {
//    //Behövs för att ladda första flaggan
//    const allCountries = flags;
//    const [correctCountry, setCorrectCountry] = useState(null);
//    //Till hit
//    const [currentIndex, setCurrentIndex] = useState(0);
//    const [random1, setRandom1] = useState(0);
//    const [random2, setRandom2] = useState(0);
//    const [random3, setRandom3] = useState(0);
//    const currentFlag = flags[currentIndex];
//    const altFlag1 = flags[random1];
//    const altFlag2 = flags[random2];
//    const altFlag3 = flags[random3];
//    const currentContinent = continent.toUpperCase();
//    const [isAltFlags, setIsAltFlags] = useState(false);
//    const [altArray, setAltArray] = useState();
//    const [altOneSet, setAltOneSet] = useState(false);

//    //Randomisera första flaggan
//    useEffect(() => {
//        const randomSelectedCountry = getRandomCountry(allCountries);
//        setCorrectCountry(randomSelectedCountry);
//    }, [allCountries]);

//    useEffect(() => {
//        setRandom1(getRandom(flags.length - 1));
//        setRandom2(getRandom(flags.length - 1));
//        setRandom3(getRandom(flags.length - 1));
//    }, [flags, currentIndex])

//    useEffect(() => {
//        if (altFlag1 && altFlag2 && altFlag3 && currentFlag) {
//            setIsAltFlags(true);
//            setAltArray([altFlag1.countryName, altFlag2.countryName, altFlag3.countryName, currentFlag.countryName]);
//        }
//    }, [altFlag1, altFlag2, altFlag3, currentFlag])

//    //Randomisera vilken flagga som ska visas först
//    const getRandomCountry = (countries) => {
//        const randomIndex = Math.floor(Math.random() * countries.length);
//        return countries[randomIndex];
//    };

//    function randomNumber(mn, mx) {
//        return Math.random() * (mx - mn) + mn;
//    }

//    function getRandomFlag() {
///*        let altArray = [altFlag1.countryName, altFlag2.countryName, altFlag3.countryName, currentFlag.countryName];*/
///*        const flagIndex = (Math.floor(randomNumber(0, 4)));*/
//        /*        const flagName = altArray[flagIndex];*/
//        const flagName = altArray[Math.floor(Math.random() * altArray.length)];

//        return flagName;
//    }

//    function getAltOne() {
//        //Kan fixa getAltOne, getAltTwo osv och uppdatera arrayen efter varje hämtning samt "setAltOneSet" = true osv.
//        //Kan displaya olika beroende på altOneSet, altTwoSet osv.
//        const flagName = altArray[Math.floor(Math.random() * altArray.length)];
//        let updatedArray = altArray.filter(f => f !== flagName);
//        console.log(updatedArray)

//        return flagName;
//    }

//    function getRandom(max) {
//        //Fixa så att man inte får samma siffra två gånger
//        return Math.floor(Math.random() * max);
//    }

//    function handleNextClick() {
//        // lägg till kontroll av svar
//        if (currentIndex < flags.length - 1) {
//            setCurrentIndex(currentIndex + 1);
//        }
//    }

//    function handlePrevClick() {
//        // kanske inte ska vara med?
//        if (currentIndex > 0) {
//            setCurrentIndex(currentIndex - 1);
//        }
//    }

//    if (!currentFlag || !altFlag1 || !altFlag2 || !altFlag3) {
//        return <div>Loading...</div>;
//    }

//    return (
//        <div>
//            <div className="quiz-content">
//                <div className="info-card">
//                    <p id="continet-name">{currentContinent}</p>
//                    <p id="progress">{currentIndex + 1} / {flags.length}</p>
//                </div>
//                <div className="quiz-card">
//                    <div className="country-container">
//                        <div className="flag-container">
//                            <img className="quiz-flag" src={correctCountry.imageUrl} alt={currentFlag.countryName} />
//                        </div>
//                        <div className="btn-container">
//                            <button id="btn-prev" onClick={handlePrevClick} disabled={currentIndex === 0}>
//                                PREVIOUS
//                            </button>
//                            <button id="btn-next" onClick={handleNextClick} disabled={currentIndex === flags.length - 1}>
//                                NEXT
//                            </button>
//                        </div>
//                    </div>
//                    {isAltFlags ?
//                        (<div className="answer-container">
//                            <button className="btn-answer">{getRandomFlag()}</button>
//                            <button className="btn-answer">{getRandomFlag()}</button>
//                            <button className="btn-answer">{getRandomFlag()}</button>
//                            <button className="btn-answer">{getRandomFlag()}</button>
//                        </div>) :

//                        (<div className="answer-container">
//                        <button className="btn-answer">""</button>
//                        <button className="btn-answer">""</button>
//                        <button className="btn-answer">""</button>
//                        <button className="btn-answer">""</button>
//                    </div>)}

//                </div>
//            </div>
//        </div>
//    )
//}

//export default QuizCard;

//import React, { useEffect, useState } from 'react';
//import '../styles/QuizCard.css';

//function QuizCard({ flags, continent }) {
//    const allCountries = flags;
//    const currentContinent = continent.toUpperCase();
//    const [correctCountry, setCorrectCountry] = useState(null);
//    const [prevCountries, setPrevCountries] = useState([]);

//    String.prototype.hashCode = function () {
//        let hash = 0;
//        if (this.length == 0) return hash;
//        for (let i = 0; i < this.length; i++) {
//            const char = this.charCodeAt(i);
//            hash = (hash << 5) - hash + char;
//            hash = hash & hash;
//        }
//        return hash;
//    };

//    //const getRandomCountry = (countries) => {
//    //    const randomIndex = Math.floor(Math.random() * countries.length);
//    //    return countries[randomIndex];
//    //};

//    //function getRandomCountry(countries, usedCountries) {
//    //    let randomIndex;
//    //    console.log("log från metoden med usedCountries:", JSON.stringify(usedCountries));

//    //    if (usedCountries === undefined || usedCountries.length === 0) {
//    //        randomIndex = Math.floor(Math.random() * countries.length);
//    //        return countries[randomIndex];
//    //    }
//    //    else {
//    //        let commonId = countries.filter(country => usedCountries.some(usedCountry => usedCountry.id === country.id));

//    //        if (commonId.length > 0) {
//    //            commonId.forEach(commonId => {
//    //                countries = countries.filter(country => country.id !== commonId);
//    //            });
//    //        }
//    //        randomIndex = Math.floor(Math.random() * countries.length);
//    //        return countries[randomIndex];
//    //    }
//    //}
//    function getRandomCountry(countries, usedCountries = []) {
//        let randomIndex;

//        // Skapa en kopia av countries-arrayen
//        let availableCountries = [...countries];

//        // Ta bort de länder som redan valts från availableCountries
//        usedCountries.forEach(usedCountry => {
//            availableCountries = availableCountries.filter(country => country.id !== usedCountry.id);
//        });

//        if (availableCountries.length === 0) {
//            // Om inga länder återstår, returnera null eller gör något annat beroende på ditt behov
//            return null;
//        }

//        // Slumpmässig index baserat på antalet tillgängliga länder
//        randomIndex = Math.floor(Math.random() * availableCountries.length);

//        return availableCountries[randomIndex];
//    }




//    useEffect(() => {
//        const randomSelectedCountry = getRandomCountry(allCountries);
//        setCorrectCountry(randomSelectedCountry);

//    }, [allCountries]);

//    useEffect(() => {
//        if (prevCountries.length > 0) {
//            console.log("Senaste previous country:", prevCountries);
//        }
//    }, [prevCountries]);

//    function handleNextClick() {
//        // Lägg till det nuvarande korrekta landet i previousCountries
//        const updatedPrevCountries = [...prevCountries, correctCountry];
//        setPrevCountries(updatedPrevCountries);

//        // Hämta ett nytt slumpmässigt land från allCountries
//        const randomSelectedCountry = getRandomCountry(allCountries, prevCountries);

//        //// Sätt det nya landet som korrekt land
//        //setCorrectCountry(randomSelectedCountry);

//        if (randomSelectedCountry === null) {
//            //Yer dön
//        } else {
//            // Sätt det nya landet som korrekt land
//            setCorrectCountry(randomSelectedCountry);
//        }
//    }

//    if (!correctCountry) {
//        console.log("correctCountry är inte laddad");
//        return <div>Loading...</div>;
//    }

//    return (
//        <div>
//            <div className="quiz-content">
//                <div className="info-card">
//                    <p id="continet-name">{currentContinent}</p>
//                </div>
//                <div className="quiz-card">
//                    <div className="country-container">
//                        <div className="flag-container">
//                            <img className="quiz-flag" src={correctCountry.imageUrl} alt={correctCountry.countryName} />
//                        </div>
//                        <div className="btn-container">
//                            <button id="btn-next" onClick={handleNextClick}>
//                                NEXT
//                            </button>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
//    )
//}

//export default QuizCard;

import React, { useEffect, useState } from 'react';
import '../styles/QuizCard.css';

function QuizCard({ flags, continent }) {
    const allCountries = flags;
    const currentContinent = continent.toUpperCase();
    const [correctCountry, setCorrectCountry] = useState(null);
    const [prevCountries, setPrevCountries] = useState([]);

    function getRandomCountry(countries, usedCountries = []) {
        let randomIndex;

        // Skapa en kopia av countries-arrayen
        let availableCountries = [...countries];

        // Ta bort de länder som redan valts från availableCountries
        usedCountries.forEach(usedCountry => {
            availableCountries = availableCountries.filter(country => country.flagId !== usedCountry.flagId);
        });

        if (availableCountries.length === 0) {
            return null;
        }

        // Slumpmässig index baserat på antalet tillgängliga länder
        randomIndex = Math.floor(Math.random() * availableCountries.length);

        return availableCountries[randomIndex];
    }

    useEffect(() => {
        const randomSelectedCountry = getRandomCountry(allCountries, prevCountries);

        if (randomSelectedCountry === null) {
            console.log('Inga länder kvar att visa');
        } else {
            setCorrectCountry(randomSelectedCountry);
        }

    }, [allCountries, prevCountries]);

    function handleNextClick() {
        // Lägg till det nuvarande korrekta landet i previousCountries
        const updatedPrevCountries = [...prevCountries, correctCountry];
        console.log(prevCountries);
        setPrevCountries(updatedPrevCountries);
    }

    if (!correctCountry) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="quiz-content">
                <div className="info-card">
                    <p id="continet-name">{currentContinent}</p>
                </div>
                <div className="quiz-card">
                    <div className="country-container">
                        <div className="flag-container">
                            <img className="quiz-flag" src={correctCountry.imageUrl} alt={correctCountry.countryName} />
                        </div>
                        <div className="btn-container">
                            <button id="btn-next" onClick={handleNextClick}>
                                NEXT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCard;
