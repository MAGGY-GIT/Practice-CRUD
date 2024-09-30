import { useState } from 'react'
import Navigation from './Components/Navigation.jsx'
import './App.css'
import Home from './Components/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <Home />
    
    </>
  )
}

export default App
