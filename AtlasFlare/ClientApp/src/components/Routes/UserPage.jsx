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
    const highScoreForQuiz7 = currentUser.highScores.find(score => score.difficulty === 7);
    const highScoreForQuiz8 = currentUser.highScores.find(score => score.difficulty === 8);
    const highScoreForQuiz9 = currentUser.highScores.find(score => score.difficulty === 9);
    const highScoreForQuiz10 = currentUser.highScores.find(score => score.difficulty === 10);
    const highScoreForQuiz11 = currentUser.highScores.find(score => score.difficulty === 11);
    const highScoreForQuiz12 = currentUser.highScores.find(score => score.difficulty === 12);
    const highScoreForQuiz13 = currentUser.highScores.find(score => score.difficulty === 13);
    const highScoreForQuiz14 = currentUser.highScores.find(score => score.difficulty === 14);
    const highScoreForQuiz15 = currentUser.highScores.find(score => score.difficulty === 15);
    const highScoreForQuiz16 = currentUser.highScores.find(score => score.difficulty === 16);
    const highScoreForQuiz17 = currentUser.highScores.find(score => score.difficulty === 17);
    const highScoreForQuiz18 = currentUser.highScores.find(score => score.difficulty === 18);

    const maxScoreForQuiz1 = 6;
    const maxScoreForQuiz2 = 10;
    const maxScoreForQuiz3 = 14;
    const maxScoreForQuiz4 = 10;
    const maxScoreForQuiz5 = 20;
    const maxScoreForQuiz6 = 53;
    const maxScoreForQuiz7 = 10;
    const maxScoreForQuiz8 = 25;
    const maxScoreForQuiz9 = 54;
    const maxScoreForQuiz10 = 10;
    const maxScoreForQuiz11 = 20;
    const maxScoreForQuiz12 = 48;
    const maxScoreForQuiz13 = 5;
    const maxScoreForQuiz14 = 8;
    const maxScoreForQuiz15 = 14;
    const maxScoreForQuiz16 = 2;
    const maxScoreForQuiz17 = 5;
    const maxScoreForQuiz18 = 7;

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
                <div className="menu-card-result">                   
                        <h2 className="h2-header">NORTH AMERICA</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <br />
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">
                                EASY: {highScoreForQuiz16 ? highScoreForQuiz16.highScore : "N/A"}
                                {highScoreForQuiz16  && ( 
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz16.highScore,
                                                maxScoreForQuiz16
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz16.highScore,
                                                    maxScoreForQuiz16
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz16.highScore,
                                                        maxScoreForQuiz16
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz16.highScore,
                                                            maxScoreForQuiz16
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                MEDIUM: {highScoreForQuiz17 ? highScoreForQuiz17.highScore : "N/A"}
                                {highScoreForQuiz17 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz17.highScore,
                                                maxScoreForQuiz17
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz17.highScore,
                                                    maxScoreForQuiz17
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz17.highScore,
                                                        maxScoreForQuiz17
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz17.highScore,
                                                            maxScoreForQuiz17
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                HARD: {highScoreForQuiz18 ? highScoreForQuiz18.highScore : "N/A"}
                                {highScoreForQuiz18 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz18.highScore,
                                                maxScoreForQuiz18
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz18.highScore,
                                                    maxScoreForQuiz18
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz18.highScore,
                                                        maxScoreForQuiz18
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz18.highScore,
                                                            maxScoreForQuiz18
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
                <div className="menu-card-result">                    
                        <h2 className="h2-header">SOUTH AMERICA</h2>
                    <h3 id="hs" >HIGH SCORE</h3>
                    <br />                               
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
                <div className="menu-card-result">
                        <h2 className="h2-header">EUROPE</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <br />
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
                                MEDIUM: {highScoreForQuiz5 ? highScoreForQuiz5.highScore : "N/A"}
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
                                                            maxScoreForQuiz5
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                HARD: {highScoreForQuiz6 ? highScoreForQuiz6.highScore : "N/A"}
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
                <div className="menu-card-result">
                    <h2 className="h2-header">AFRICA</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <br />
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">
                                EASY: {highScoreForQuiz7 ? highScoreForQuiz7.highScore : "N/A"}
                                {highScoreForQuiz7 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz7.highScore,
                                                maxScoreForQuiz7
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz7.highScore,
                                                    maxScoreForQuiz7
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz7.highScore,
                                                        maxScoreForQuiz7
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz7.highScore,
                                                            maxScoreForQuiz7
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                MEDIUM: {highScoreForQuiz8 ? highScoreForQuiz8.highScore : "N/A"}
                                {highScoreForQuiz8 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz8.highScore,
                                                maxScoreForQuiz8
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz8.highScore,
                                                    maxScoreForQuiz8
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz8.highScore,
                                                        maxScoreForQuiz8
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz8.highScore,
                                                            maxScoreForQuiz8
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                HARD: {highScoreForQuiz9 ? highScoreForQuiz9.highScore : "N/A"}
                                {highScoreForQuiz9 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz9.highScore,
                                                maxScoreForQuiz9
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz9.highScore,
                                                    maxScoreForQuiz9
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz9.highScore,
                                                        maxScoreForQuiz9
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz9.highScore,
                                                            maxScoreForQuiz9
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
                <div className="menu-card-result">
                    <h2 className="h2-header">ASIA</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <br />
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">
                                EASY: {highScoreForQuiz10 ? highScoreForQuiz10.highScore : "N/A"}
                                {highScoreForQuiz10 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz10.highScore,
                                                maxScoreForQuiz10
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz10.highScore,
                                                    maxScoreForQuiz10
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz10.highScore,
                                                        maxScoreForQuiz10
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz10.highScore,
                                                            maxScoreForQuiz10
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                MEDIUM: {highScoreForQuiz11 ? highScoreForQuiz11.highScore : "N/A"}
                                {highScoreForQuiz11 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz11.highScore,
                                                maxScoreForQuiz11
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz11.highScore,
                                                    maxScoreForQuiz11
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz11.highScore,
                                                        maxScoreForQuiz11
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz11.highScore,
                                                            maxScoreForQuiz11
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                HARD: {highScoreForQuiz12 ? highScoreForQuiz12.highScore : "N/A"}
                                {highScoreForQuiz12 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz12.highScore,
                                                maxScoreForQuiz12
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz12.highScore,
                                                    maxScoreForQuiz12
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz12.highScore,
                                                        maxScoreForQuiz12
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz12.highScore,
                                                            maxScoreForQuiz12
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
                <div className="menu-card-result">
                    <h2 className="h2-header">OCEANIA</h2>
                    <h3 id="hs">HIGH SCORE</h3>
                    <br />
                    <div className="menu-links">
                        <ul className="menu-ul">
                            <li className="menu-li">
                                EASY: {highScoreForQuiz13 ? highScoreForQuiz13.highScore : "N/A"}
                                {highScoreForQuiz13 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz13.highScore,
                                                maxScoreForQuiz13
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz13.highScore,
                                                    maxScoreForQuiz13
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz13.highScore,
                                                        maxScoreForQuiz13
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz13.highScore,
                                                            maxScoreForQuiz13
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                MEDIUM: {highScoreForQuiz14 ? highScoreForQuiz14.highScore : "N/A"}
                                {highScoreForQuiz14 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz14.highScore,
                                                maxScoreForQuiz14
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz14.highScore,
                                                    maxScoreForQuiz14
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz14.highScore,
                                                        maxScoreForQuiz14
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz14.highScore,
                                                            maxScoreForQuiz14
                                                        ) >= 0
                                                            ? "nomedal"
                                                            : ""
                                        }
                                    />
                                )}
                            </li>
                            <li className="menu-li">
                                HARD: {highScoreForQuiz15 ? highScoreForQuiz15.highScore : "N/A"}
                                {highScoreForQuiz15 && (
                                    <FontAwesomeIcon
                                        icon={faMedal}
                                        className={
                                            calculatePercentage(
                                                highScoreForQuiz15.highScore,
                                                maxScoreForQuiz15
                                            ) >= 100
                                                ? "gold-medal"
                                                : calculatePercentage(
                                                    highScoreForQuiz15.highScore,
                                                    maxScoreForQuiz15
                                                ) >= 75
                                                    ? "silver-medal"
                                                    : calculatePercentage(
                                                        highScoreForQuiz15.highScore,
                                                        maxScoreForQuiz15
                                                    ) >= 30
                                                        ? "bronze-medal"
                                                        : calculatePercentage(
                                                            highScoreForQuiz15.highScore,
                                                            maxScoreForQuiz15
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