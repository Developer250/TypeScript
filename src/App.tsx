import React, { useState } from 'react';
import './App.css';

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submit = (e: any) => {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields must be filled!");
        }
        else {
            alert("Form has been submitted succesfully!");
        }

    }

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
                            className="password"
                            placeholder="enter your password"
                            type="password"
                            name="password"
                            value={password}
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

export default App;
