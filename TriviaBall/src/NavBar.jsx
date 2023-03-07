import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBar(){
    return(
        <ul>
            <li className="charIcon"><Link style={{ textDecoration: 'none', color: "black" }} to="/Profile"><i className="nes-mario"></i></Link></li>
            <li><Link style={{ textDecoration: 'none', color: "black"}} to="/Leaderboard">Leaderboard</Link></li>
            <li><Link style={{ textDecoration: 'none', color: "black" }} to="/About">About</Link></li>
        </ul>
    )
}

export default NavBar