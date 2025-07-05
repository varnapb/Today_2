import { Card, CardMedia, Grid, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/my-cart")
      .then((res) => {
        setCartItems(res.data)
      })
      .catch((err) => {
        console.log("Failed to fetch cart items:", err)
      })
  }, [])

  return (
    <div>
      <h2>My Cart</h2>
      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card>
              <CardMedia sx={{height: 140 }} image={item.productId.Image}/>
              <CardContent>
                <Typography variant="h6">{item.productId.Pname}</Typography>
                <Typography variant="body2" color="text.secondary">₹{item.productId.Disc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        
      </Grid>
    </div>
  )
}

export default Cart
