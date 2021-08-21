import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {

    return (
        <div className="navigation-container">
            <Link to="/">Go Home</Link>
            <Link to="/about">Go About</Link>
            <Link to="/champions">Go Champions</Link>
        </div>
    )

}

export default Navigation