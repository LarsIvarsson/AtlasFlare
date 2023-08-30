import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [student, setStudent] = useState({
        Username: '',
        Password: '',
    });
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student),
            });

            if (response.ok) {
                //Show success message
                console.log(response);
                navigate("/login");
            }

            else {
                //Show error message
                console.log(response);
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
        <hr />
        <h3>Current input: {student.Username} {student.Password}</h3>
    </div>
}

export default Register;