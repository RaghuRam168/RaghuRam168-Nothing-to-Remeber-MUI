import React from 'react'
import { Grid, Typography } from '@mui/material'
// import data from '../data/Data'
import EditCard from '../components/EditCard'
import { useSelector } from 'react-redux/es/exports'
const EditProductsPage = () => {
const data = useSelector((state)=>state.products.items)
  return (
    <div>
      <Typography variant='h4'sx={{margin:1}} >Edit Products</Typography>
        <Grid container spacing={2} >
            {
                data.map((product)=><Grid item xs={6} sm={4} md={3}><EditCard id={product.id} cost={product.cost} name={product.name} category={product.category} photo={product.photo} selected={product.selected} stock={product.stock} /></Grid>)
            }
        </Grid>
    </div>
  )
}

export default EditProductsPage