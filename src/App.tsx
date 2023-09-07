import React, { useState } from 'react';
import './App.css';
function App()
//Initializing the username's, password's and error's states, so we can keep on track where is input going
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    //The validation logic goes here
    const submit = (e: any, number: number, Boolean: true) => {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields must be filled!");
        }
        if (!regex.test(email))
            setError('Please enter a valid email address');

        else {
            alert("Form has been submitted succesfully!");

        }
        //Form
        return (
            <form>
                <div className="login">
                    <div className="loginbox">
                        <div className="loginheader">Login</div>
                        <div className="inputs">
                            <input
                                className="username"
                                type="text"
                                placeholder="enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input

                                className="email"
                                placeholder="enter your email"
                                name="email"
                                type={email}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>

                            <input
                                className="password"
                                placeholder="enter your password"
                                type="password"
                                name="password"
                                value={password}
                                //Function call = onChange
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <div className="error"> {error}</div>}
                        <div>
                            <button onClick={submit} className="btn" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default App;
