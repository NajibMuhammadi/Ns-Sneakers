import React from 'react'
import { useState } from 'react'
import Header from './comp/headerComp/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/collections/Collections'
import Footer from './comp/footerComp/footer/Footer'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import UserEditProfile from './pages/userEditProfile/UserEditProfile'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={
            <>
              <Header isEditProfilePage={false} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
              <Collections />
              <Footer />
            </>
          } />
          <Route path='/login' element={
            <>
              <Header isEditProfilePage={false}/>
              <Login />
            </>
          } />
          <Route path='/register' element={
            <>
              <Header isEditProfilePage={false}/>
              <Register />
            </>
          } />
          <Route path='/editprofile/*' element={
            <>
              <Header isEditProfilePage={true} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
              <UserEditProfile isLoggedIn={isLoggedIn}/>
              <Footer isEditProfilePage={true}/>
            </>
            }/> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
