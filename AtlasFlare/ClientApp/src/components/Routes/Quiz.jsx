import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import QuizCard from '../QuizCard';

function Quiz() {
    const { continent } = useParams();
    const [flags, setFlags] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [altArray, setAltArray] = useState([]);
    // Number is a state from the link-tag,
    // not used atm but will implement later to set quiz difficulty
    const { number } = useLocation().state;

    useEffect(() => {
        fetch(`flags/${continent}`)
            .then(res => res.json())
            .then(data => setFlags(data));
    }, [continent]);

    // Generate random flags and alternatives whenever currentIndex changes
    useEffect(() => {
        if (flags.length > 0) {
            const currentFlag = flags[currentIndex];
            let tempArray1 = [];
            let tempArray2 = [];
            let altArray1Copy = [];
            let altArray2Copy = [];

            altArray1Copy.push(currentFlag);
            tempArray1.push(currentIndex);

            while (altArray1Copy.length < 4) {
                const randomIndex = Math.floor(Math.random() * flags.length);

                if (randomIndex !== currentIndex && !tempArray1.includes(randomIndex)) {
                    tempArray1.push(randomIndex);
                    altArray1Copy.push(flags[randomIndex]);
                }
            }

            while (altArray2Copy.length < 4) {
                const randomIndex = Math.floor(Math.random() * 4);

                if (!tempArray2.includes(randomIndex)) {
                    tempArray2.push(randomIndex);
                    altArray2Copy.push(altArray1Copy[randomIndex]);
                }
            }
            setAltArray(altArray2Copy);
        }
    }, [currentIndex, flags]);

    if (!continent || !flags || !altArray) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <QuizCard
                flags={flags}
                continent={continent}
                currentIndex={currentIndex}
                altArray={altArray}
                setCurrentIndex={setCurrentIndex} />
        </div>
    )
}

export default Quiz;
