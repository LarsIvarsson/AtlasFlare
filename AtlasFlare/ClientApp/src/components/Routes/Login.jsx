import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [user, SetUser] = useState({
        username: "",
        password: ""
    });

    function handleFormIpnut(e) {
    }

    function handleLogin() {
        const response = fetch("user/{id}?password={password}");
        if (response.ok) {
            //Ok login
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
                <input placeholder='Username' onChange={handleFormIpnut} type="text" value={user.username}></input>
                <input placeholder='Password' onChange={handleFormIpnut} type="password" value={user.password}></input>

                <button type="submit">Login</button>
            </form>
            <Link to={"/Register"}>Don't have an account? Register!</Link>
        </div>
    );
}

export default Login;