import React from 'react';
import { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home({NavBar, playablecharacter}){

    return (
    <>
    <NavBar playablecharacter={playablecharacter}/>
        <div id="sky">
        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>
        <div class="cloud cloud-3"></div>
        <div class="cloud cloud-4"></div>
                <span id="trivia" className="test">Trivia</span>
                  <br></br>
                <span id="ball" className="test">Ball</span></div>
             <div id="ground">
                <Link to="/Gamefield"><button type="button" className="nes-btn is-primary">Start Game</button></Link>
             </div>
    </>
    )
}

export default Home;