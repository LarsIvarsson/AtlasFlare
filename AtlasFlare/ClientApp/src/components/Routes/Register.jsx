import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import "../../styles/Register.css";

function Register() {
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm({
        defaultValues: {
            userName: "",
            password: "",
        },
        mode: "onBlur"
    });
    const [successMessage, setSuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function onSubmit() {
        setErrorMessage("");
        const student = { Username: getValues("userName"), Password: getValues("password") };

        const response = await fetch("user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student),
        });

        if (response.ok) {
            //Show success message
            setSuccessMessage("Welcome to the Atlas Flare family!");
            delay(2000).then(() => navigate("/login"));
        }

        else {
            //Show error message
            setErrorMessage("Username is already in use...");
        }
    }

    function onError() {

    }

    return (
        <div className="content">
            <div className="register-container">
                <div className="input-display">
                    <div className="successmessage-div success-register">{successMessage}</div>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <label htmlFor="name-input">USERNAME</label>
                        <input id="name-input" type="text" name="userName" placeholder="Username"
                            {...register("userName", {required: "You must specify a username.",
                                minLength: { value: 3, message: "Username needs to be minimum 3 characters." }, pattern: {
                                    value: /[A-Za-z]/,
                                    message: "Username can only contain letters."
                                }
                            })}>
                        </input>
                        <div className="message-div warning-register">
                            {errors.userName?.message}
                        </div>
                        <label htmlFor="password-input">PASSWORD</label>
                        <input id="password-input" type="password" name="password" placeholder="Password"
                            {...register("password", {required: "You must specify a password.",
                                minLength: { value: 5, message: "Password needs to be minimum 5 characters." }
                            })}>
                        </input>
                        <div className="message-div warning-register">
                            {errors.password?.message}
                        </div>
                        <div className="message-div warning-register">
                            {errorMessage}
                        </div>
                        <button id="enter-btn" type="submit">Enter</button>
                    </form>
                    <div className="link-container">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;