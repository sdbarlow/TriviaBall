import React from 'react';
import { useState } from 'react'
import './Home.css'

function Home({NavBar}){
    return (
    <>
    <NavBar/>
        <div id="sky">
                <span id="trivia" className="test">Trivia</span>
                  <br></br>
                <span id="ball" className="test">Ball</span></div>
             <div id="ground">
                <button type="button" className="nes-btn is-primary">Start Game</button>
             </div>
    </>
    )
}

export default Home;