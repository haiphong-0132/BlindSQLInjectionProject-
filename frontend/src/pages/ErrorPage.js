import React from "react";
import {Link, useLocation} from "react-router-dom";
import Header from "../components/Header";

export default function ErrorPage(){
    const location = useLocation();
    const errorMessage = location.state?.message || "An unknown error occurred";

    return (
        <div className="container">
            <Header />
            <div className="error-container">
                <h2>Something went wrong.</h2>
                <p>{errorMessage}</p>
            </div>

            <div className="back-link">
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
}