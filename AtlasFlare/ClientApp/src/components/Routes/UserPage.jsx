import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/UserPage.css";


function UserPage() {
    const { name } = useParams();
    const { userId } = useParams();
    const [highScores, setHighScores] = useState([]);
    const uppercaseName = name.toUpperCase();



    useEffect(() => {
        // Fetch high scores data for the user

        fetch(`https://localhost:44432/user/2/highscores`)
            .then((res) => res.json())

            .then(data => {
                console.log(data);
                setHighScores(data);

            })
            .catch(error => {
                console.error('Error fetching high scores:', error);
                console.error('Response status:', error.response ? error.response.status : 'unknown');
                console.error('Response data:', error.response ? error.response.data : 'unknown');
            });

    }, []);

    const highScoreForQuiz1 = highScores.find((score) => score.quizId === 1);
    const highScoreForQuiz2 = highScores.find((score) => score.quizId === 2);
    const highScoreForQuiz3 = highScores.find((score) => score.quizId === 3);
    const highScoreForQuiz4 = highScores.find((score) => score.quizId === 4);
    const highScoreForQuiz5 = highScores.find((score) => score.quizId === 5);
    const highScoreForQuiz6 = highScores.find((score) => score.quizId === 6);


    console.log(highScoreForQuiz2)

    

    if (!name) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>
                <div className="greeting-container">
                    <h1 id="greeting">HELLO {uppercaseName}!</h1>
                </div>
            </div>
            <div className="card-container">

                <div className="menu-card">
                    <h2>SOUTH AMERICA</h2>
                    <h3 id="hs" >HIGH SCORE</h3>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">EASY: {highScoreForQuiz1 ? highScoreForQuiz1.highScore : 'N/A'}</li>
                            <li className="menu-li">MEDIUM: {highScoreForQuiz2 ? highScoreForQuiz2.highScore : 'N/A'}</li>
                            <li className="menu-li">HARD: {highScoreForQuiz3 ? highScoreForQuiz3.highScore : 'N/A'}</li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2>EUROPE</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">EASY: {highScoreForQuiz4 ? highScoreForQuiz4.highScore : 'N/A'}</li>
                            <li className="menu-li">MEDIUM: {highScoreForQuiz5 ? highScoreForQuiz5.highScore : 'N/A'}</li>
                            <li className="menu-li">HARD: {highScoreForQuiz6 ? highScoreForQuiz6.highScore : 'N/A'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;