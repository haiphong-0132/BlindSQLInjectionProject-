import React from "react"
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div class="header">
            <h1>PTIT Online Shop</h1>
            <div class="nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}