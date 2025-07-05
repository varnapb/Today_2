import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <AppBar sx={{ background: '#04381f' }}>
      <Toolbar>
        <Typography sx={{ fontSize: 32, color: 'white' }}>Admin</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to='/add' variant='contained' sx={{ backgroundColor: 'white', color: 'black' }}>Add</Button>
        &nbsp;&nbsp;
        <Button component={Link} to='/view' variant='contained' sx={{ backgroundColor: 'white', color: 'black' }}>View</Button>
      </Toolbar>
    </AppBar>
  )
}

export default AdminNavBar
