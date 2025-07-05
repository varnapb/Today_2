import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ background: '#04381f' }}>
        <Toolbar>
          <Typography variant='h4' sx={{ fontFamily: 'Bernard MT Condensed' }}>
            Product App
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button component={Link} to='/add' variant='contained' sx={{ backgroundColor: 'white', color: 'black', marginRight: 1 }}>Add</Button>
          <Button component={Link} to='/view' variant='contained' sx={{ backgroundColor: 'white', color: 'black', marginRight: 1 }}>View</Button>
          <Button component={Link} to='/login' variant='contained' sx={{ backgroundColor: 'white', color: 'black', marginRight: 1 }}>Login</Button>
          <Button component={Link} to='/sign' variant='contained' sx={{ backgroundColor: 'white', color: 'black' }}>Signup</Button>
        </Toolbar>
      </AppBar>
      <br /><br />
    </>
  )
}

export default Navbar
