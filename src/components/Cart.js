import { Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const data = useSelector((state)=>state.cart.items)
  return (
    <Container>
          {data.map((pro)=>
          <Container>
                <Typography variant='body2' >{pro.name}</Typography>
                <Typography variant='body1' >{pro.qantity}</Typography>
          </Container>
          )}
    </Container>   
      
  )
}

export default Cart