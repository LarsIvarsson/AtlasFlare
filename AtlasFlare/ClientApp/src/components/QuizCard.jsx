import React from 'react';
import '../styles/QuizCard.css';

function QuizCard(props) {
    return (
        <div>
            <h1>{props.flag.countryName}</h1>
            <img src={props.flag.imageUrl} alt={props.flag.countryName}/>
        </div>
    )
}

export default QuizCard;