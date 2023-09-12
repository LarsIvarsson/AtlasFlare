import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import QuizCard from '../QuizCard';

function Quiz() {
    const { continent } = useParams();
    const { number } = useLocation().state;
    const [flags, setFlags] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
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
        let availableFlags = [...flags];

        usedFlags.forEach(u => {
            availableFlags = availableFlags.filter(c => c.flagId !== u.flagId);
        });
        //if (availableFlags.length === 0) {
        //    // something to do
        //}

        let randomIndex = Math.floor(Math.random() * availableFlags.length);
        const randomFlag = availableFlags[randomIndex];
        setCurrentIndex(randomIndex);


        if (randomFlag !== null && flags.length > 0) {
            setCurrentFlag(randomFlag);

            let tempArray1 = [];
            
            let altArray1Copy = [];


            altArray1Copy.push(randomFlag);
            tempArray1.push(randomIndex);

            while (altArray1Copy.length < 4) {
                const randomIndex = Math.floor(Math.random() * availableFlags.length);

                if (!tempArray1.includes(randomIndex)) {
                    tempArray1.push(randomIndex);
                    altArray1Copy.push(availableFlags[randomIndex]);
                }
            }

            let tempArray2 = [];
            let altArray2Copy = [];

            while (altArray2Copy.length < 4) {
                const randomIndex = Math.floor(Math.random() * 4);

                if (!tempArray2.includes(randomIndex)) {
                    tempArray2.push(randomIndex);
                    altArray2Copy.push(altArray1Copy[randomIndex]);
                }
            }
            setAltArray(altArray2Copy);
        }
    }, [flags, counter]);

    //function getRandomFlag(previousFlags = []) {
    //    let availableFlags = [...flags];

    //    previousFlags.forEach(u => {
    //        availableFlags = availableFlags.filter(c => c.flagId !== u.flagId);
    //    });

    //    if (availableFlags.length === 0) {
    //        return null;
    //    }

    //    let randomIndex = Math.floor(Math.random() * availableFlags.length);
    //    setCurrentIndex(randomIndex);

    //    return availableFlags[randomIndex];
    //}

    function removeUsedFlag() {
        const updatedUsedFlags = [...usedFlags, currentFlag];
        setUsedFlags(updatedUsedFlags);
    }

    function increaseCounter() {
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
                removeUsedFlag={removeUsedFlag}
                currentFlag={currentFlag}
                counter={counter}
                increaseCounter={increaseCounter} />
        </div>
    )
}

export default Quiz;
