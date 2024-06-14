import React from 'react'
import Header from './comp/headerComp/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/collections/Collections'

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element= {<Collections/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
