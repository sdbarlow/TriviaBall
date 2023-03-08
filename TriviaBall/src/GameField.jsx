import React from 'react'
import { useState } from 'react'
import './GameField.css'

function GameField(){
    return (
    <>
        <div id="sky"></div>
        <div id="ground">
        <div id="field">
      <div id="endzone-left"></div>
      <div id="zone-1">
        <h2 className="uzero">0</h2>
        <h2 id="number">1</h2>
      </div>
      <div id="zone-2">
        <h2 id="uone">1</h2>
        <h2 className="uzero">0</h2>
        <h2 id="zero">0</h2>
        <h2 id="number">2</h2>
      </div>
      <div id="zone-3">
        <h2 id="utwo">2</h2>
        <h2 className="uzero">0</h2>
        <h2 id="two-zero">0</h2>
        <h2 id="number">3</h2>
      </div>
      <div id="zone-4">
        <h2 id="uthree">3</h2>
        <h2 className="uzero">0</h2>
        <h2 id="three-zero">0</h2>
        <h2 id="number">4</h2>
      </div>
      <div id="zone-5">
        <h2 id="ufour">4</h2>
        <h2 className="uzero">0</h2>
        <h2 id="four-zero">0</h2>
        <h2 id="number">5</h2>
      </div>
      <div id="zone-6">
        <h2 id="ufive">5</h2>
        <h2 className="uzero">0</h2>
        <h2 id="five-zero">0</h2>
        <h2 id="number">4</h2>
      </div>
      <div id="zone-7">
        <h2 id="ufour2">4</h2>
        <h2 className="uzero">0</h2>
        <h2 id="hfour-zero">0</h2>
        <h2 id="number">3</h2>
      </div>
      <div id="zone-8">
        <h2 id="uthree2">3</h2>
        <h2 className="uzero">0</h2>
        <h2 id="hthree-zero">0</h2>
        <h2 id="number">2</h2>
      </div>
      <div id="zone-9">
        <h2 id="utwo2">2</h2>
        <h2 className="uzero">0</h2>
        <h2 id="htwo-zero">0</h2>
        <h2 id="number">1</h2>
      </div>
      <div id="zone-10">
        <h2 id="uone2">1</h2>
        <h2 id="hone-zero">0</h2>
      </div>
      <div id="endzone-right"></div>
    </div>
        </div>
    </>
    )
}


export default GameField;