import { send } from 'process';
import React, { useState } from 'react';
import './App.css';

function App() {

    const submit = () => {

        alert("Your form has been sent succesfully!");
    }

    return (
        <div className="login">
            <div className="loginbox">
                <div className="loginheader">Login</div>
                <div className="inputs">
                    <input className="username"
                        type="text" placeholder="enter your username">
                    </input>
                    <input className="password"
                        placeholder="enter your password"
                        type="password"
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
