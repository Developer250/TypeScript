import React from 'react';
import './App.css';

function App() {
    return (
        <div className="login">
            <div className="loginbox">
                <div className="loginheader">Login</div>
                <div className="inputs">
                    <input className="email" placeholder="enter your email"></input>
                    <input className="password" placeholder="enter your password" type="password" ></input>
                </div>
                <div>
                    <button className="btn">login</button>
                </div>
            </div>
        </div>
  );
}

export default App;
