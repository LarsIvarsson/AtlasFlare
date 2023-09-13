import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../../styles/UserPage.css";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    }, [allUsers, name, currentUser]);



    if (!name || !users || !currentUser.highScores) {
        return <div>Loading...</div>
    }

    const highScoreForQuiz1 = currentUser.highScores.find(score => score.difficulty === 1);
    const highScoreForQuiz2 = currentUser.highScores.find(score => score.difficulty === 2);
    const highScoreForQuiz3 = currentUser.highScores.find(score => score.difficulty === 3);
    const highScoreForQuiz4 = currentUser.highScores.find(score => score.difficulty === 4);
    const highScoreForQuiz5 = currentUser.highScores.find(score => score.difficulty === 5);
    const highScoreForQuiz6 = currentUser.highScores.find(score => score.difficulty === 6);

    const maxScoreForQuiz1 = 6;
    const maxScoreForQuiz2 = 10;
    const maxScoreForQuiz3 = 54;
    const maxScoreForQuiz4 = 10;
    const maxScoreForQuiz5 = 20;
    const maxScoreForQuiz6 = 20;

    const calculatePercentage = (score, maxScore) => {
        return (score / maxScore) * 100;
    };


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
                            <li className="menu-li">
                                EASY: {highScoreForQuiz1 ? highScoreForQuiz1.highScore : "N/A"}
                                {highScoreForQuiz1 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz1.highScore,
                                                maxScoreForQuiz1
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz1.highScore,
                                                    maxScoreForQuiz1
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz1.highScore,
                                                        maxScoreForQuiz1
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz1.highScore,
                                                            maxScoreForQuiz1
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                MEDIUM: {highScoreForQuiz2 ? highScoreForQuiz2.highScore : "N/A"}
                                {highScoreForQuiz2 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz2.highScore,
                                                maxScoreForQuiz2
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz2.highScore,
                                                    maxScoreForQuiz2
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz2.highScore,
                                                        maxScoreForQuiz2
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz2.highScore,
                                                            maxScoreForQuiz2
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                HARD: {highScoreForQuiz3 ? highScoreForQuiz3.highScore : "N/A"}
                                {highScoreForQuiz3 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz3.highScore,
                                                maxScoreForQuiz3
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz3.highScore,
                                                    maxScoreForQuiz3
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz3.highScore,
                                                        maxScoreForQuiz3
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz3.highScore,
                                                            maxScoreForQuiz3
                                                        ) >= 0
                                                            ? "nomedal"
                                                            :""
                                        }
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu-card">
                    <h2>EUROPE</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">
                                EASY: {highScoreForQuiz4 ? highScoreForQuiz4.highScore : "N/A"}
                                {highScoreForQuiz4 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz4.highScore,
                                                maxScoreForQuiz4
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz4.highScore,
                                                    maxScoreForQuiz4
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz4.highScore,
                                                        maxScoreForQuiz4
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz4.highScore,
                                                            maxScoreForQuiz4
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                EASY: {highScoreForQuiz5 ? highScoreForQuiz5.highScore : "N/A"}
                                {highScoreForQuiz5 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz5.highScore,
                                                maxScoreForQuiz5
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz5.highScore,
                                                    maxScoreForQuiz5
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz5.highScore,
                                                        maxScoreForQuiz5
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz5.highScore,
                                                            maxScoreForQuiz4
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                EASY: {highScoreForQuiz6 ? highScoreForQuiz6.highScore : "N/A"}
                                {highScoreForQuiz6 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz6.highScore,
                                                maxScoreForQuiz6
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz6.highScore,
                                                    maxScoreForQuiz6
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz6.highScore,
                                                        maxScoreForQuiz6
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz6.highScore,
                                                            maxScoreForQuiz6
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default UserPage;