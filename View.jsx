import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import axios, { Axios } from 'axios'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const View = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/view")
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err)
      })
  }, [])

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/del/${id}`)
      .then((res) => {
        alert(res.data.message)
        setProducts(prev => prev.filter(product => product._id !== id))
      })
      .catch((err) => {
        console.error("Delete failed:", err)
        alert("Failed to delete product")
      })
  }

  const updateProduct = (val) => {
    navigate("/add", { state: { val } })
  }


  const addToCart = (productId) => {
    axios.post("hhtp://localhost:3004/add-to-cart",{
      userId: user?.id,
      productId: productId
    }).then((res)=> {
      alert(res.data.message);
    })
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {products.map((val) => (
        <Grid item key={val._id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 413 }}>
            <CardMedia
              sx={{ height: 330 }}
              image={val.Image}
              title={val.Pname}
            />
            <CardContent sx={{ height: 150 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Cambria' }}>
                {val.Pname}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Cambria', color: 'red' }}>
                {val.Price}/-
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Cambria' }}>
                {val.Desc}
              </Typography>
            </CardContent>
            <CardActions>
              {user ? (
                user.userType === "admin" ? (
                  <>
                    <Button size="medium" variant="contained" color="success" onClick={() => updateProduct(val)}>
                      Update
                    </Button>
                    <Button size="medium" variant="contained" color="error" onClick={() => deleteProduct(val._id)}>
                      Delete
                    </Button>
                  </>
                ) : (
                  <Button size="small" variant="contained" color="primary" onClick={() => addToCart(val._id)}>
                    Add to Cart
                  </Button>
                )
              ) : null}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default View
