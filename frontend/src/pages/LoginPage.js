import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    const [error, setError] = useState('');
    const [flag, setFlag] = useState(''); 
    const [isAdmin, setIsAdmin] = useState(false); 
    const [isUser, setIsUser] = useState(false); 

    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            if (data.user && data.user.flag) {
                setFlag(data.user.flag);
            }

            if (data.user && data.user.isAdmin) {
                setIsAdmin(true);
            }

            if (data.user && data.user.isAdmin==0) {
                setIsUser(true);
            }

            localStorage.setItem('token', data.token);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <Header />
            <LoginForm onLogin={handleLogin} error={error} />

            {isAdmin && (
                <div className="success-message">
                    <p>Login successful as Administrator!</p>
                </div>
            )}

            {isUser && (
                <div className="not-admin-message">
                    <p>Login successful! But you are user, so you can't see FLAG {":))"}</p>
                </div>
            )}

            {flag && (
                <div className="flag-message">
                    <p>FLAG: {flag} ♫</p>
                </div>
            )}
        </div>
    );
}
