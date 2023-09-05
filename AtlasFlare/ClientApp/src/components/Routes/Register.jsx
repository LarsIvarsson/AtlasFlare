import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [student, setStudent] = useState({
        Username: '',
        Password: '',
    });
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            //Testing for numbers in the username
            //Add check for special characters!
            const usernameContainsNumbers = /\d/.test(student.Username);

            if (!usernameContainsNumbers) {
                if (student.Username.trim().length >= 3 && student.Password.trim().length >= 5) {
                    const response = await fetch("user", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(student),
                    });

                    if (response.ok) {
                        //Show success message
                        console.log(response.statusText);
                        setMessage("Congrats, you are now a fullworthy member of Atlas Flare!\n You will now be redirected...");
                        delay(2000).then(() => navigate("/login"));
                    }

                    else {
                        //Show error message
                        console.log(response.statusText);
                    }
                }

                else {
                    //Please fill in all fields
                    setMessage("Please fill in all the fields...");
                }
            }

            else {
                setMessage("Username can't contain numbers...");
            }

        } catch (error) {
            //Show error message
            console.log(error);
        }
    }

    function handleUsername(e) {
        setStudent({ ...student, Username: e.target.value });
    }

    function handlePassword(e) {
        setStudent({ ...student, Password: e.target.value });
    }

    return <div>
        <h1>Register here please...</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name-input">Username</label>
                <input id="name-input" type="text" onChange={handleUsername} value={student.Username}></input>
                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" onChange={handlePassword} value={student.Password}></input>
                <button type="submit">Enter</button>
            </form>
        </div>
        <p>{message}</p>
        <hr />
        <h3>Current input: {student.Username} {student.Password}</h3>
    </div>
}

export default Register;