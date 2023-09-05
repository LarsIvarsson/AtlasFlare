import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizCard from '../QuizCard';

function Quiz() {
    const { continent } = useParams();
    const [flags, setFlags] = useState([]);

    useEffect(() => {
        fetch(`flags/${continent}`)
            .then(res => res.json())
            .then(data => setFlags(data));
    }, [continent])

    return (
        <div>
            {flags.map((f) => (
                <QuizCard key={f.flagId} flag={f} />
            ))}                
        </div>
    )
}

export default Quiz;