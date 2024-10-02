import { useState } from 'react'
import Navigation from './Components/Navigation.jsx'
import './App.css'
import Home from './Components/Home.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    
      <Navigation />
      
      <Routes>
         <Route exact path="/" element={<Home />}/>
      </Routes>

    </BrowserRouter>

    
    </>
  )
}

export default App