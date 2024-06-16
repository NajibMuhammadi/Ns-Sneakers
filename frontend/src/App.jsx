import React from 'react'
import Header from './comp/headerComp/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/collections/Collections'
import Footer from './comp/footerComp/footer/Footer'

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element= {<Collections/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
