import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app.jsx'

// Prevent horizontal overflow
const preventOverflow = () => {
  document.documentElement.style.width = '100%'
  document.documentElement.style.overflowX = 'hidden'
  document.body.style.width = '100%'
  document.body.style.overflowX = 'hidden'
}

// Apply once on load
preventOverflow()

// And listen for resize events
window.addEventListener('resize', preventOverflow)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
