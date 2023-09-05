import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizCard from '../QuizCard';
import '../../styles/Quiz.css';

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
            <div className="content">
                <div className="card">
                    <h1>Quiz template</h1>
                    {flags.map((f) => (
                        <QuizCard key={f.flagId} flag={f}></QuizCard>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Quiz;