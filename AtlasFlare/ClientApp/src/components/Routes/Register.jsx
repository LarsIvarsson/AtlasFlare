import React, { useState, useEffect } from 'react';

function Register() {
    const [user, setUser] = useState({
        UserId: 0,
        Username: "",
        Password: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        user.UserId = Math.floor(Math.random() * 1000);

        let message = fetch("user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
    }

    function handleUsername(e) {
        setUser({ ...user, Username: e.target.value });
    }

    function handlePassword(e) {
        setUser({ ...user, Password: e.target.value });
    }

    return <div>
        <h1>Register here please...</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Username</label>
            <input id="name-input" type="text" onChange={handleUsername} value={user.Username}></input>
            <label htmlFor="password-input"></label>
            <input id="password-input" type="password" onChange={handlePassword} value={user.Password}></input>
            <button type="submit">Enter</button>
        </form>
        <hr />
        <h3>Current input: {user.Username} {user.Password}</h3>
    </div>
}

export default Register;