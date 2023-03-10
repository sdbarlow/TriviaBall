
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { useRef } from 'react';
import './App.css'
import Home from './Home';
import Profile from './Profile';
import NavBar from './NavBar';
import Leaderboard from './Leaderboard';
import About from './About';
import GameField from './GameField';

function App() {
  let navigate = useNavigate();
  const [count, setCount] = useState(0)

  const[number, setNumber] = useState(1);
  const[Characters, setCharacters] = useState([]);
  const[playablecharacter, setPlayableCharacter] = useState("")

  const [question, setQuestion] = useState({});
const [questionnumber, setQuestionNumber] = useState(0);
const [shuffledQuestionIndexes, setShuffledQuestionIndexes] = useState([]);

const fetchedQuestionsRef = useRef([]);

useEffect(() => {
  fetch("http://localhost:3000/characters")
    .then(resp => resp.json())
    .then(data => {
      setCharacters(data)
      let arr = [];
      for (let i = 1; i <= 19; i++) {
        arr.push(i);
      }
      setShuffledQuestionIndexes(shuffleArray(arr));
      setQuestionNumber(1);
    });
}, []);

useEffect(() => {
  const fetchedQuestions = fetchedQuestionsRef.current;
  if (shuffledQuestionIndexes.length > 0 && fetchedQuestions.includes(shuffledQuestionIndexes[questionnumber])) {
    // question has already been fetched, so skip to the next one
    setQuestionNumber(questionnumber + 1);
  } else if (shuffledQuestionIndexes.length > 0) {
    // fetch new question
    fetch(`http://localhost:3000/Questions/${shuffledQuestionIndexes[questionnumber]}`)
      .then(resp => resp.json())
      .then(data => {
        setQuestion(data);
        fetchedQuestionsRef.current = [...fetchedQuestions, shuffledQuestionIndexes[questionnumber]];
      });
  }
}, [questionnumber, shuffledQuestionIndexes]);

useEffect(() => {
  setShuffledQuestionIndexes(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]));
}, []);

// The effect now only depends on the `Characters` state variable
useEffect(() => {
  if (Characters.length > 0 && shuffledQuestionIndexes.length > 0) {
    navigate('/');
  }
}, [Characters]);

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

console.log(question)

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

console.log(question)

  return (
    <>
    <div className="left-bar"></div>
    <div className="left-bar-border"></div>
    <div className="right-bar"></div>
    <div className="right-bar-border"></div>
    <div id="outer">
      <div id="inner">
        <div id="gamescreen-border"></div>
          <div id="gamescreen">
            <div id="screenvisual">
            <Routes>
              <Route path="/" element={<Home playablecharacter={playablecharacter} NavBar={NavBar} />}/>
              <Route path="/Profile" element={<Profile handleClick={handleClick} number={number} whenSubmit={whenSubmit} Characters={Characters}/>}/>
              <Route path="/Leaderboard" element={<Leaderboard/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Gamefield" element={<GameField playablecharacter={playablecharacter}  questionnumber={questionnumber} setQuestionNumber={setQuestionNumber} question={question}/>}/>
            </Routes>
            </div>
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
