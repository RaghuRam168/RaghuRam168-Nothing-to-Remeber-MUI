import React from 'react'
import {Grid, Typography} from '@mui/material'
import Cards from '../components/Cards'
//import data from '../data/Data'
import { useSelector } from 'react-redux/es/exports'

const Products = () => {
  
  const data =useSelector((state)=>state.products.items)

  return (
    <div>
      <Typography variant='h4'sx={{margin:1}} >Add Purchase</Typography>
    
   <Grid container spacing={3}>
       {
        data.map((product)=><Grid item xs={6} sm={4} md={3}><Cards key={product.id} id={product.id} cost={product.cost} name={product.name} category={product.category} photo={product.photo} selected={product.selected} /></Grid>)
       }
   </Grid>
   </div>
  )
}

export default Products