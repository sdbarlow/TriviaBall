import React from 'react'
import { useState, useEffect } from 'react'
import './GameField.css'

function GameField({ question, setQuestionNumber, questionnumber, playablecharacter }){
  const [timeRemaining, setTimeRemaining] = useState(20);
  const [restart, setRestart] = useState(true)
  const [questionorder, setQuestionOrder] = useState([])
  const[downtracker, setDownTracker] = useState(1);
  const[characterposition, setCharacterPosition] = (useState("21%"));
 const[windetermine, setWinDetermine] = (useState(false))

  useEffect(() => {
    if(characterposition === "92%"){
      setWinDetermine(!windetermine)
    }
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [restart]);
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isRed = timeRemaining <= 5;
  const style = isRed ? { color: 'red' } : {};
  const finished = 0;

  function handleClick(e){
      console.log(e.target.id)
      console.log(e.target.textContent)
      setTimeRemaining(20)
        setRestart(!restart);
        setQuestionNumber(questionnumber+1)
        if(e.target.id === e.target.textContent){
          if(characterposition === "77.9%"){
            const initialPercentage = parseInt(characterposition); // Convert "499%" to 499
            const newPercentage = initialPercentage + 15;
            setCharacterPosition(`${newPercentage}%`);
          }else{
            const initialPercentage = parseInt(characterposition); // Convert "499%" to 499
            const newPercentage = initialPercentage + 8.9;
            setCharacterPosition(`${newPercentage}%`); // Convert 330 to "330%"
          }
        }else{
            setDownTracker(downtracker + 1)
        }
      }
  

      


  function whenChanged(){
    if (finished === timeRemaining){
        setTimeRemaining(20)
        setRestart(!restart);
        setQuestionNumber(questionnumber+1)
    } else {

    }
  }
  if(question.length===0) return <div>Loading</div>
    return (
    <>
        <div id="header1"><span id="downtracker">Down:{downtracker}</span><div onChange={whenChanged()} className="countdown" style={style}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</div></div>
        <div id="sky1">
        <table id="tables">
            <tr>
                <th colspan="2" id="mainquestion">{question.Q}</th>
            </tr>
            <tr>
                <td onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[0]} className="datas">{question.PA[0]}</td>
                <td onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[1]} className="datas">{question.PA[1]}</td>
            </tr>
            <tr>
                <td onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[2]} className="datas">{question.PA[2]}</td>
                <td onClick={(e) => handleClick(e)} id={question.RA} value={question.PA[3]} className="datas">{question.PA[3]}</td>
            </tr>
        </table> 
        </div>
        <div id="ground1">
        <div id="character-container">
          <img id="characterguy"  style={{marginLeft:characterposition}} src={playablecharacter}/>
        </div>
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