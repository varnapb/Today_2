import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
  const [input, setInput] = useState({ Pname: "", Price: "", Desc: "", Image: "" })
  const navigate = useNavigate()
  const location = useLocation()

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const addProduct = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3000/update/" + location.state.val._id, input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        })
        .catch((err) => alert("Update failed"))
    } else {
      axios.post("http://localhost:3000/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        })
        .catch((err) => alert("Add failed"))
    }
  }

  useEffect(() => {
    if (location.state !== null) {
      setInput({
        Pname: location.state.val.Pname,
        Price: location.state.val.Price,
        Desc: location.state.val.Desc,
        Image: location.state.val.Image,
      })
    }
  }, [location.state])

  return (
    <center>
    <Box
      sx={{
        height: 440,
        width: 300,
        my: 4,
        paddingTop: 5,
        paddingBottom: 5,
        border: '2px solid grey',
        backgroundColor: 'rgb(225, 233, 215)',
        textAlign: 'center'
      }}
    >
      <Typography variant='h4' sx={{ fontFamily: 'Bernard MT Condensed' }}>
        {location.state !== null ? 'Update Product' : 'Add Product'}
      </Typography>
      <br /><br />
      <TextField variant='outlined' label='Product name' name="Pname" value={input.Pname} onChange={inputHandler} fullWidth />
      <br /><br />
      <TextField variant='outlined' label='Price' name="Price" value={input.Price} onChange={inputHandler} fullWidth />
      <br /><br />
      <TextField variant='outlined' label='Description' name="Desc" value={input.Desc} onChange={inputHandler} fullWidth />
      <br /><br />
      <TextField variant='outlined' label='Image' name="Image" value={input.Image} onChange={inputHandler} fullWidth />
      <br /><br />
      <Button variant='contained' sx={{ backgroundColor: '#003b3b' }} onClick={addProduct}>
        {location.state !== null ? 'Update' : 'Add'}
      </Button>
    </Box>
    </center>
  )
  
}

export default Add
