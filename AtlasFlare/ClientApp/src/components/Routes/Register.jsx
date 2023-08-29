import React, { useState, useEffect } from 'react';

function Register() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleSubmit(e) {
        e.preventDefault();

    }

    function handleUsername(e) {
        setUser({ ...user, username: e.target.value });
    }

    function handlePassword(e) {
        setUser({ ...user, password: e.target.value });
    }

    return <div>
        <h1>Register here please...</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Username</label>
            <input id="name-input" type="text" onChange={handleUsername} value={user.username}></input>
            <label htmlFor="password-input"></label>
            <input id="password-input" type="password" onChange={handlePassword} value={user.password}></input>
            <button type="submit">Enter</button>
        </form>
        <hr />
        <h3>Current input: {user.username} {user.password}</h3>
    </div>
}

export default Register;