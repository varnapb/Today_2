import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [linput, setLinput] = useState({ Email: "", Password: "" })
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setLinput({ ...linput, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    axios.post("http://localhost:3000/login", linput)
      .then((res) => {
        alert(res.data.message)
        if (res.data.message === "Logged in successfully") {
          localStorage.setItem("user", JSON.stringify({
            email: res.data.email,
            name: res.data.name,
            userType: res.data.userType,
            id: res.data.userId
          }))

          if (res.data.userType === "admin") {
            navigate("/admin")
          } else {
            navigate("/user")
          }
        }
      })
      .catch((err) => {
        console.error("Login error:", err)
        alert("An error occurred during login")
      })
  }


  return (
    
    <Box
      sx={{
        height: 250,
        width: 300,
        my: 4,
        paddingTop: 5,
        paddingBottom: 5,
        border: '2px solid grey',
        backgroundColor: 'rgb(233, 215, 217)',
        margin: 'auto'
      }}
    ><br></br>
      <Typography variant='h4' sx={{ fontFamily: 'Bernard MT Condensed', textAlign: 'center' }}>Login</Typography>
      <br />
      <TextField variant='outlined' label='Email' name="Email" value={linput.Email} onChange={inputHandler} fullWidth />
      <br /><br />
      <TextField variant='outlined' label='Password' name="Password" value={linput.Password} onChange={inputHandler} fullWidth type="password" />
      <br /><br />
      <Button variant='contained' onClick={handleLogin} sx={{ backgroundColor: '#003b3b', width: '100%' }}>Login</Button>
    </Box>
  )
}

export default Login
