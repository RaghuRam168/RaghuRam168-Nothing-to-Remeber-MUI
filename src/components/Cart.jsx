import { Badge, Button, Container, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { changeCartVisibility } from "../redux/CartSlice";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
const Cart = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.cart);
  // const [open,setOpen] = useState(props.open)
  // console.log(data);
  return (
    
    <Menu
      anchorOrigin={{vertical:'top',horizontal:'right'}}
      keepMounted
      transformOrigin={{vertical:'top',horizontal:'right'}}
      open={data.visibility}
    >
      <Container
      sx={{m:0}}>
        <Toolbar>
      <Typography variant="h4">Cart</Typography>
      <Box sx={{flexGrow:1}}></Box>
      <IconButton onClick={()=>dispatch(changeCartVisibility())} color={'error'} ><CloseIcon/></IconButton>
      </Toolbar>
      {data.items.map((pro) => (
        <Container
          sx={{
            p: 2,
            mt: 1,
            mb: 1,
            width:{xs:'80vw',sm:'400px'},
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <Badge badgeContent={pro.quantity} color="error">
            <img
              src={pro.photo}
              alt="product"
              style={{
                // width: "50px",
                height: "50px",
                objectFit:'fill',
              }}
            />
          </Badge>
          <Typography variant="body2">{pro.name}</Typography>
        </Container>
      ))}
      <Button sx={{bgcolor:'success.main',color:'#fff',":hover":{bgcolor:'#7DCE13'}}} onClick={()=>dispatch(changeCartVisibility())} >Checkout</Button>
      </Container>
    </Menu>
  );
};

export default Cart;
