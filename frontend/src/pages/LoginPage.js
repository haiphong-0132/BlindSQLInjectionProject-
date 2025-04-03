import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(username, password) => {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            localStorage.setItem('token', data.token);
            navigate('/products');

        } catch(error){
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <Header />
            <LoginForm onLogin={handleLogin} error={error} />
        </div>
    )

}