import React, {useState} from "react";

export default function LoginForm({onLogin, error}){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };


    return (
        <div className="login-form">
            <h2>User Login</h2>
            {error && (
                <div className="error">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={handleChange} required />
                </div>

                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}