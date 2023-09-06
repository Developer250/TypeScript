/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import './App.css';

function App() {

    const submit = () => {

        alert("Your form has been sent succesfully!");
    }
    function form() {
        const [username, setUsername] = useState({
            username: "",
            password: "", 
        });

        const [errors, setErrors] = useState({ });

        const validateValues = (inputValues: { username: ""; password: ""; }) => {
            let errors = {};
            if (inputValues.username.length < 15) {
                errors.username = "Email is too short";
            }
            if (inputValues.password.length < 5) {
                errors.password = "Password is too short";
            }
            
            }
            return errors;
    };

    const handleChange = (e: any) => {
        setInputFields({ ...setInputFields, [e.target.name]: e.target.value });
    };

        return (
            <div className="login">
                <div className="loginbox">
                    <div className="loginheader">Login</div>
                    <div className="inputs">
                        <input className="username"
                            type="text" placeholder="enter your username" onChange={handleChange}
                        ></input>
                        <input className="password"
                            placeholder="enter your password"
                            type="password" onChange={handleChange}
                            name="password"
                        ></input>
                    </div>
                    <div>
                        <button onClick={submit} className="btn" type="submit">Login</button>
                    </div>
                </div>
            </div>
        );
}
export default App;

