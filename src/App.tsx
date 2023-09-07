import react, { useState } from 'react';
import './App.css';

function App() {
//Initializing the username's, password's and error's states, so we can keep on track where is input going

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [phone, setPhone] = useState("");

    //The validation logic goes here
    const submit = (e: any) => {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields must be filled!");
        }

        else if (phone.length !== 10) {
            setError("Please enter phone number");

        }

     else {
            setError(""); // Clear any previous errors
            alert("Form has been submitted succesfully!");

        }
    };
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
                                className="phone"
                                placeholder="enter your phone number"
                                name="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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
export default App;
