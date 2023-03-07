
import { useState } from 'react'
import { Switch, Route } from "react-router-dom"
import './App.css'
import Home from './Home';
import Profile from './Profile';
import NavBar from './NavBar';
import Leaderboard from './Leaderboard';
import About from './About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <div className="left-bar"></div>
      <div className="right-bar"></div>
      <div id="outer">
        <div id="inner">
          <div id="gamescreen">
            <Switch>
              <Route exact path="/">
                <Home NavBar={NavBar} />
              </Route>
              <Route path="/Profile">
                <Profile/>
              </Route>
              <Route path="/Leaderboard">
                <Leaderboard/>
              </Route>
              <Route path="/About">
                <About/>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className="realArcade"></div>
      <div class="realArcade2"></div>
      <div id="button2"></div>
      <div id="joystick"></div>
      <div id="joystickball">
        <div id="joystickballcrescent1"></div>
      </div>
      <div id="joystick-hole"></div>
    </body>
  )
}

export default App
