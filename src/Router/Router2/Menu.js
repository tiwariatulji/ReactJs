import React from 'react'
import "../Router2/menuStyle.css"
import{Link} from "react-router-dom"
export default function Menu() {
    return (
        <div className="menuStyle">
            
        <ul>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/user">User</Link></li>
                 
        </ul>
        </div>
    )
}
