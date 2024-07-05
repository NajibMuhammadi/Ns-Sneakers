import React from 'react'
import Header from './comp/headerComp/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/collections/Collections'
import Footer from './comp/footerComp/footer/Footer'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import UserProfile from './pages/userProfile/UserProfile'

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Collections />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<UserProfile/>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
