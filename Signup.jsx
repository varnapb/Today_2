import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [sub, setSub] = useState({ name: '', email: '', password: '', phone: '' })
  const navigate = useNavigate()

  const submitHandler = (e) => {
    setSub({ ...sub, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    axios.post('http://localhost:3000/signup', sub)
      .then(res => {
        alert(res.data.message)
        navigate("/")
      })
      .catch(err => {
        console.error(err)
        alert('Signup failed. Please try again.')
      })
  }

  return (
    <div align='center'>
      <br /><br />
      <Typography variant='h4' color='primary'>SignUp</Typography>
      <br /><br />
      <TextField variant='outlined' label='Name' name='name' value={sub.name} onChange={submitHandler} />
      <br /><br />
      <TextField variant='outlined' label='Email' name='email' value={sub.email} onChange={submitHandler} />
      <br /><br />
      <TextField variant='outlined' type='password' label='Password' name='password' value={sub.password} onChange={submitHandler} />
      <br /><br />
      <TextField variant='outlined' label='Phone' name='phone' value={sub.phone} onChange={submitHandler} />
      <br /><br />
      <Button variant='contained' onClick={handleSubmit}>SignUp</Button>
    </div>
  )
}

export default Signup
