import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleFormInput(e) {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }

    function handleLogin() {
        const response = fetch("user/{id}?password={password}");
        if (response.ok) {
            //Ok login
            //ta användaren till quiz sidan
        }
        else {
            //Error login
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
                <input placeholder='Username' onChange={handleFormInput} type="text" value={user.username}></input>
                <input placeholder='Password' onChange={handleFormInput} type="password" value={user.password}></input>

                <button type="submit">Login</button>
            </form>
            <Link to={"/Register"}>Don't have an account? Register!</Link>
        </div>
    );
}

export default Login;