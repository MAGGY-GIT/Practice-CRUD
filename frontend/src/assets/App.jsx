import { useState } from 'react'
import Navigation from '../Components/Navigation.jsx';
import StudentList from '../Pages/StudentList.jsx';
import StudentProfile from '../Pages/StudentProfile.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navigation />
      {/** Anything out of the routes tag will appear on all pages */}

      <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
      </BrowserRouter>

    </div>
  )
}

export default App