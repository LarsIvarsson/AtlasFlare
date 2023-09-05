import React from 'react';
import '../styles/QuizCard.css';

function QuizCard(props) {
    return (
        <div>
            <div className="content">
                <div className="card">
                    <h1>{props.flag.countryName}</h1>
                    <img className="quiz-flag" src={props.flag.imageUrl} alt={props.flag.countryName} />
                </div>
            </div>
        </div>
    )
}

export default QuizCard;