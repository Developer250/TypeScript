import { send } from 'process';
import React, { useState } from 'react';
import './App.css';


function App() {
    const [inputs, setInputs] = useState({ email: '', password: '' });

   


    return (
        <div className="login">
            <div className="loginbox">
                <div className="loginheader">Login</div>
                <div className="inputs">
                    <input className="email" type="text" placeholder="enter your email"></input>
                    <input className="password" placeholder="enter your password" type="password" value={inputs.password || ""}
                        ></input>
                </div>
                <div>

                    <button className="btn" type="submit">Login</button>
                </div>
            </div>
        </div>

    );
}
    


export default App;
