import { Strictmode } from 'react-router-dom'
import React from 'react'
import App from './assets/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Strictmode>
    <App />
  </Strictmode>,
)
