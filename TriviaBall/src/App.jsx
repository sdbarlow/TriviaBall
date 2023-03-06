import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <span id="trivia" className="test">Trivia</span>
      <br></br>
      <span id="ball" className="test">Ball</span>
    </div>
  )
}

export default App
