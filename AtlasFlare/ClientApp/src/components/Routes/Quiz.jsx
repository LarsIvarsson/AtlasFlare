import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import QuizCard from '../QuizCard';

function Quiz() {
    const { continent } = useParams();
    const { number, chosenQuiz } = useLocation().state;
    const [flags, setFlags] = useState([]);
    const [altArray, setAltArray] = useState([]);
    const [usedFlags, setUsedFlags] = useState([]);
    const [currentFlag, setCurrentFlag] = useState(null);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        fetch(`flags/${continent}`)
            .then(res => res.json())
            .then(data => setFlags(data));
    }, [continent]);

    useEffect(() => {
        if (flags.length === 0 || usedFlags.length >= flags.length) {
            return;
        }

        let availableFlags = [...flags];

        usedFlags.forEach(u => {
            availableFlags = availableFlags.filter(f => f.flagId !== u.flagId);
        });

        let correctFlagIndex = Math.floor(Math.random() * availableFlags.length);
        const correctFlag = availableFlags[correctFlagIndex];
        setCurrentFlag(correctFlag);

        if (correctFlag !== null && flags.length > 0) {
            let usedIndexArray1 = [];
            let usedIndexArray2 = [];
            let flagArray1 = [];
            let flagArray2 = [];

            usedIndexArray1.push(correctFlagIndex);
            flagArray1.push(correctFlag);

            while (flagArray1.length < 4) {
                const randomIndex = Math.floor(Math.random() * flags.length);

                if (randomIndex !== correctFlagIndex && !usedIndexArray1.includes(randomIndex) && !flagArray1.includes(flags[randomIndex])) {
                    usedIndexArray1.push(randomIndex);
                    flagArray1.push(flags[randomIndex]);
                }
            }

            while (flagArray2.length < 4) {
                const randomIndex = Math.floor(Math.random() * 4);

                if (!usedIndexArray2.includes(randomIndex)) {
                    usedIndexArray2.push(randomIndex);
                    flagArray2.push(flagArray1[randomIndex]);
                }
            }
            setAltArray(flagArray2);
        }
    }, [flags, counter]);

    function increaseCounter() {
        const updatedUsedFlags = [...usedFlags, currentFlag];
        setUsedFlags(updatedUsedFlags);
        setCounter(counter + 1);
    }

    if (!continent || !flags || !altArray || !number || !currentFlag) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <QuizCard
                flags={flags}
                continent={continent}
                lastIndex={number}
                altArray={altArray}
                currentFlag={currentFlag}
                counter={counter}
                increaseCounter={increaseCounter}
                chosenQuiz={chosenQuiz}
            />
        </div>
    )
}

export default Quiz;
