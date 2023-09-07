import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import QuizCard from '../QuizCard';

function Quiz() {
    const { continent } = useParams();
    const [flags, setFlags] = useState([]);
    const { number } = useLocation().state;

    useEffect(() => {
        fetch(`flags/${continent}`)
            .then(res => res.json())
            .then(data => setFlags(data));
        // nummber passed from Link state, will use to set difficulty
        console.log(number);
    }, [continent, number])

    return (
        <div>
            <QuizCard flags={flags} continent={continent} />
        </div>
    )
}

export default Quiz;