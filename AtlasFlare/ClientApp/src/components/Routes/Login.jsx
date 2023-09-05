import { useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/LogIn.css";

function Login() {

    const [student, setStudent] = useState({
        Username: '',
        Password: '',
    });
    const navigate = useNavigate();

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
                    //Ok login
                    //ta användaren till quiz sidan
                    console.log("Successful login");

                    // Save user login status to LocalStorage

                    navigate("/menu");
                }
                else {
                    //Error login
                }
            })
        }
        catch (error) {

        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin();
    }

    return (
        <div>
            <div className="content">
            
                <div className="card-login">

                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <label>USERNAME</label>
                            <input id="name-input"  placeholder='Username' onChange={handleUsername} type="text" value={student.Username}></input>
                            <label>PASSWORD</label>
                            <input id="password-input"  placeholder='Password' onChange={handlePassword} type="password" value={student.Password}></input>

                            <button id="login-btn" type="submit">Login</button>
                        </form>
                        <div className="link-container">
                            <Link id="reg-link" to={"/Register"}>
                                Don't have an account? Register!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;