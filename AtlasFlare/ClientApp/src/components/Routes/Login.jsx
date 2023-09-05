import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {

    const [student, setStudent] = useState({
        Username: '',
        Password: '',
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    function handleUsername(e) {
        setStudent({ ...student, Username: e.target.value });
    }

    function handlePassword(e) {
        setStudent({ ...student, Password: e.target.value });
    }

    function handleLogin() {
        console.log("Username:", student.Username);
        console.log("Password:", student.Password);
        const username = student.Username;
        const password = student.Password;

        const url = `user/${username}?password=${password}`;

        try {
            fetch(url).then(response => {
                if (response.ok) {
                    // set local storage
                    localStorage.setItem("signedInUser", username);
                    props.changeSignedIn();
                    navigate("/menu");
                }
                else {
                    // Error login
                    setErrorMessage("Something went wrong!")
                }
            })
        }
        catch (error) {
            // Error
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin();
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input id="name-input" placeholder='Username' onChange={handleUsername} type="text" value={student.Username}></input>
                <input id="password-input" placeholder='Password' onChange={handlePassword} type="password" value={student.Password}></input>

                <button type="submit">Login</button>
                <p>{ errorMessage }</p>
            </form>
            <Link to={"/Register"}>Don't have an account? Register!</Link>
        </div>
    );
}

export default Login;