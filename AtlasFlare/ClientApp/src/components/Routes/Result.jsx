import React, { useState } from 'react';

function Result() {

    return (
        <div>
            <div className="quiz-content">
                <div className="info-card">
                    <p id="continent-name"> New high score: </p>
                    <p id="progress">Current high score: </p>
                </div>
                <div className="quiz-card">
                    <div className="country-container">
                        <div className="flag-container">
                            <img className="quiz-flag" alt=""/>
                        </div>
                    </div>
                    <div className="answer-container">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;