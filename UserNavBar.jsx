import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UserNavBar = () => {
  return (
    <AppBar sx={{ background: '#04381f' }}>
      <Toolbar>
        <Typography sx={{ fontSize: 32, color: 'white' }}>User</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to='/view' variant='contained' sx={{ backgroundColor: 'white', color: 'black' }}>
          View
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default UserNavBar
