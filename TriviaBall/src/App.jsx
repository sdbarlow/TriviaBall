
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './Home';
import Profile from './Profile';
import NavBar from './NavBar';
import Leaderboard from './Leaderboard';
import About from './About';
import GameField from './GameField';

function App() {
  const [count, setCount] = useState(0)

  const[number, setNumber] = useState(1);

  const[Characters, setCharacters] = useState([]);
  const[playablecharacter, setPlayableCharacter] = useState("")

useEffect(() => {
  fetch(`http://localhost:3000/characters/${number}`)
      .then(resp => resp.json())
      .then(data => setPlayableCharacter(data.image)) 
}, [number])

  function handleClick(e,id){
    console.log(e)
    console.log(id)
    setNumber(id);
}

  useEffect(() => {
      fetch("http://localhost:3000/characters")
      .then(resp => resp.json())
      .then(data => setCharacters(data)) 
  }, [])

function whenSubmit(val) {
  fetch("http://localhost:3000/characters", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image:val    
    })
  })
  .then (resp => resp.json())
  .then (data => {
    setCharacters([...Characters, data])
  })
  document.getElementById('dialog-default').hideModal()
}

  return (
    <>
      <div className="left-bar"></div>
      <div className="right-bar"></div>
      <div id="outer">
        <div id="inner">
          <div id="gamescreen">
            <Routes>
              <Route path="/" element={<Home playablecharacter={playablecharacter} NavBar={NavBar} />}/>
              <Route path="/Profile" element={<Profile handleClick={handleClick} number={number} whenSubmit={whenSubmit} Characters={Characters}/>}/>
              <Route path="/Leaderboard" element={<Leaderboard/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Gamefield" element={<GameField/>}/>
            </Routes>
          </div>
        </div>
      </div>
      <div className="realArcade"></div>
      <div className="realArcade2"></div>
      <div id="button2"></div>
      <div id="joystick"></div>
      <div id="joystickball">
        <div id="joystickballcrescent1"></div>
      </div>
      <div id="joystick-hole"></div>
    </>
  )
}

export default App
