import { Link } from "react-router-dom";
import React from 'react'

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <Link to="/">Click to view our home page</Link>
        </div>
    )
}

export default About