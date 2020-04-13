import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
export default function Heade() {
    return (
        <div>
            <ul>

                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </div>
    )
}
