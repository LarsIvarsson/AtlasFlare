import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

function Register() {
    const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm({
        defaultValues: {
            userName: "",
            password: "",
/*            passwordConfirm: ""*/
        },
        mode: "onBlur"
    });
    const [successMessage, setSuccessMessage] = useState();
    const navigate = useNavigate();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function onSubmit() {
        //const response = await fetch("user", {
        //    method: "POST",
        //    headers: { "Content-Type": "application/json" },
        //    body: JSON.stringify(userName, password),
        //});

        //if (response.ok) {
        //    //Show success message
        //    console.log(response.statusText);
        //    setSuccessMessage("Congrats, you are now a fullworthy member of Atlas Flare!\n You will now be redirected...");
        //    delay(2000).then(() => navigate("/login"));
        //}

        //else {
        //    //Show error message
        //    console.log(response.statusText);
        //}
    }

    function onError() {

    }

    return (
        <div className="content">
            <div className="register-container">
                <div className="input-display">
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
                        <p className="warning-register">{errors.userName?.message}</p>
                        <label htmlFor="password-input">PASSWORD</label>
                        <input id="password-input" type="password" name="password" placeholder="Password"
                            {...register("password", {required: "You must specify a password.",
                                minLength: { value: 5, message: "Password needs to be minimum 5 characters." }
                            })}>
                        </input>
                        <p className="warning-register">{errors.password?.message}</p>
                        {/*<input type="password" name="passwordConfirm" placeholder="Confirm password"*/}
                        {/*    {...register("passwordConfirm", {required: true})}*/}
                        {/*>*/}
                        {/*    {watch("passwordConfirm") !== watch("password") &&*/}
                        {/*        getValues("password_repeat") ? (*/}
                        {/*        <p>Password do not match!</p>*/}
                        {/*    ) : <p>OK!</p>}*/}
                        {/*</input>*/}
                        <button id="enter-btn" type="submit">Enter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;

{/*<div className="content">*/ }
{/*    <div className="register-container">                    */ }
{/*        <div className="input-display">*/ }
{/*            <form onSubmit={handleSubmit}>*/ }
{/*                <label>USERNAME*/ }
{/*                </label>*/ }
{/*                <input id="name-input" type="text" placeholder="Username" onChange={handleUsername} value={student.Username}></input>                      */ }
{/*                <label>PASSWORD*/ }
{/*                </label>*/ }
{/*                <input id="password-input" type="password" placeholder="Password" onChange={handlePassword} value={student.Password}></input>*/ }
{/*                <button id="enter-btn" type="submit">Enter</button>*/ }
{/*            </form>*/ }
{/*            <div className="message-container">*/ }
{/*                <p className="warning-message">{message}</p>*/ }
{/*                </div>*/ }
{/*            </div>                    */ }
{/*    </div>*/ }
{/*</div>*/ }