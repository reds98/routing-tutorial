import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar' >
        <li><Link to="/">Home</Link></li>
        <li><Link  to="/help">Help</Link></li>
        <li><Link  to="/tutorials">Tutorials</Link></li>
        
    </div>
  )
}
