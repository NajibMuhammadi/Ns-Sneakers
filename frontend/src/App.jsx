import React from 'react'
import Header from './comp/headerComp/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collections from './pages/collections/Collections'
import Footer from './comp/footerComp/footer/Footer'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import UserEditProfile from './pages/userEditProfile/UserEditProfile'

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={
            <>
              <Header isEditProfilePage={false} />
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
          <Route path='/men' element={
            <>
              <Header isEditProfilePage={true}/>
              <UserEditProfile />
              <Footer isEditProfilePage={true}/>
            </>
            }/> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
