import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem('user')
    navigate("/login")
  }

  if (!user) return <h2>No admin logged in.</h2>

  return (
    <div style={{ padding: 20 }}>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <Button variant='contained' onClick={handleLogOut}>Logout</Button>
    </div>
  )
}

export default Admin
