import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/UserPage.css";


function UserPage() {
    const { name } = useParams();

    const uppercaseName = name.toUpperCase();
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState([]);



    useEffect(() => {

        fetch(`user/${name}/getId`)
            .then((res) => res.json())
            .then(data => setUsers(data))

    }, [name]);



    useEffect(() => {
        // Make a fetch request to your API endpoint
        fetch(
            `https://localhost:44432/user/AllUsers`)
            .then((response) => response.json())
            .then((data) => {

                setAllUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    useEffect(() => {

        //Search for the user with the matching username in allUsers
        const foundUser = allUsers.find((user) => user.username === name);

        if (foundUser) {

            setCurrentUser(foundUser);

        }
    }, [allUsers, name]);



    if (!name || !users || !currentUser.highScores)  {
        return <div>Loading...</div>
    }

    const highScoreForQuiz1 = currentUser.highScores.find(score => score.quizId === 1);
    const highScoreForQuiz2 = currentUser.highScores.find(score => score.quizId === 2);
    const highScoreForQuiz3 = currentUser.highScores.find(score => score.quizId === 3);
    const highScoreForQuiz4 = currentUser.highScores.find(score => score.quizId === 4);
    const highScoreForQuiz5 = currentUser.highScores.find(score => score.quizId === 5);
    const highScoreForQuiz6 = currentUser.highScores.find(score => score.quizId === 6);

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
                            <li className="menu-li">EASY: {highScoreForQuiz1 ? highScoreForQuiz1.highScore : 'N/A'} </li>
                            <li className="menu-li">MEDIUM: {highScoreForQuiz2 ? highScoreForQuiz2.highScore : 'N/A'}</li>
                            <li className="menu-li">HARD: {highScoreForQuiz3 ? highScoreForQuiz3.highScore : 'N/A'} </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2>EUROPE</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">EASY: {highScoreForQuiz4 ? highScoreForQuiz4.highScore : 'N/A'}</li>
                            <li className="menu-li">MEDIUM: {highScoreForQuiz5 ? highScoreForQuiz5.highScore : 'N/A'} </li>
                            <li className="menu-li">HARD: {highScoreForQuiz6 ? highScoreForQuiz6.highScore : 'N/A'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage;