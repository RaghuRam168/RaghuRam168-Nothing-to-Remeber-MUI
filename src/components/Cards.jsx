import React, { useState } from "react";
import pic from './img.png'
import {
  Card,
  Button,
  CardActions,
  CardHeader,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useDispatch,useSelector} from 'react-redux'
import { borderRadius } from "@mui/system";
import { addProduct,editProductQuantityInCart } from "../redux/CartSlice";
import { editProductQuantityInProducts } from "../redux/ProductSlice";

const Cards = (props) => {
  const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 200}} raised={true}  square={false} >
      <CardMedia component="img" height="150" sx={{ height:{xs:300} }}  image={props.photo} alt="Product Image" sx={{objectFit:'contain'}} />
      <Typography variant="h6" sx={{margin:'auto',textAlign:'center',}}>{props.name}</Typography>
      <Typography variant="subtitle1" sx={{margin:'auto',
     textAlign:'center',}}>{"Rs : "+props.cost}</Typography>
      <CardActions>
      {(props.selected===0)?<Button
       sx={{
        height:40,
        width:40,
        backgroundColor:'#4AFF01',
        color:"#000"
      }}
      onClick={()=>{
        dispatch(editProductQuantityInProducts({
          id:props.id,
          quantity:1
        }))
        dispatch(editProductQuantityInCart({
          id:props.id,
          quantity:1
        }))
        dispatch(addProduct({
          id:props.id,
          quantity:1,
          name:props.name
        }))
        // addProduct(dispatch,{
        //   id:props.id,
        //   quantity:1
        // })
      }}>ADD</Button>:<CardActions
       sx={{
       margin:'0px auto'
       }}
       >
        
        <Button
        id="sub"
        aria-lable="sub"
        sx={{
          height:40,
          width:40,
          backgroundColor:'error.main',
          color:'#fff'
        }}
        onClick={()=>{
          dispatch(editProductQuantityInCart({
            id:props.id,quantity:props.selected-1
          }))
          dispatch(editProductQuantityInProducts({
            id:props.id,quantity:props.selected-1
          }))
          // editProductQuantity(dispatch,{
          //   id:props.id,quantity:count
          // })
        }}>
          <RemoveIcon />
        </Button>
          <Box 
          sx={{
            width:50,
            border:'1px solid primary.main',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:1,
          }}>
                <Typography variant="h6">{props.selected}</Typography>
          </Box>
          <Button aria-lable="add" onClick={()=>{
          dispatch(editProductQuantityInCart({
            id:props.id,quantity:props.selected+1
          }))
          dispatch(editProductQuantityInProducts({
            id:props.id,quantity:props.selected+1
          }))
        }}
         sx={{
          height:40,
          width:40,
          backgroundColor:'success.main',
          color:'#fff'
        }}>
          <AddIcon/>
        </Button>
       

      </CardActions>}
      </CardActions>
    </Card>
  );
};



export default Cards;
