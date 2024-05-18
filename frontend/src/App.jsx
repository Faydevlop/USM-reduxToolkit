import React from 'react'
import LoginPage from './pages/Loginpage'
import Signinpage from './pages/Signinpage'
import Homepage from './pages/Homepage'
import ProfilePage from './pages/Profilepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
   <Routes>
    {/* users routs */}

    <Route path='/'  element={<Homepage/>} />
    <Route path='/login'  element={<LoginPage/>} />
    <Route path='/signup'  element={<Signinpage/>} />
    <Route path='/Profile'  element={<ProfilePage/>} />

    {/* admin routes */}

    {/* <Route path='/admin/dashboard'  element={<AdminDashboard/>} /> */}


   </Routes>
   </BrowserRouter>
  )
}

export default App