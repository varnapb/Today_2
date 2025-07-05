import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { Route, Routes, Navigate } from 'react-router-dom'  // <-- Added Navigate
import Signup from './components/Signup'
import Login from './components/Login'
import Admin from './components/Admin'
import User from './components/User'
import AdminNavBar from './components/AdminNavBar'
import UserNavBar from './components/UserNavBar'

function App() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      {user ? (user.userType === "admin" ? <AdminNavBar /> : <UserNavBar />) : (<Navbar />)}
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/view" />} />
        <Route path='/add' element={<Add />} />
        <Route path='/view' element={<View />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </>
  )
}

export default App
