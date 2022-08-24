import React, { useState } from "react";
import pic from "./img.png";
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
  Collapse,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
  TextField
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { borderRadius } from "@mui/system";
import { deleteProduct ,editProduct } from "../redux/ProductSlice";
import { useDispatch } from "react-redux";


const EditCard = (props) => {
const dispatch = useDispatch()
    const inputChangeHandler = (e) => {
        setInputDetails({...inputDetails,[e.target.id]:e.target.value})
        //console.log(e);
    };

  const [inputDetails, setInputDetails] = useState({
    id:props.id,
    photo: props.photo,
    name: props.name,
    cost: props.cost,
    stock:props.stock,
    selected:props.selected
  });
  const [cardDetails, setCardDetails] = useState({
    photo: props.photo,
    name: props.name,
    cost: props.cost,
    stock:props.stock,
    selected:props.selected
  });
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 200 }} raised={true} square={false}>
        <CardMedia
          component="img"
          height="150"
          sx={{ height: { xs: 300 } }}
          image={cardDetails.photo}
          alt="Product Image"
          sx={{ objectFit: "contain" }}
        />
        <Typography variant="h6" sx={{ margin: "auto", textAlign: "center" }}>
          {props.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ margin: "auto", textAlign: "center" }}
        >
          {"Rs : " + props.cost}
        </Typography>

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            className="add"
            aria-lable="add"
            onClick={() => setEdit(!edit)}
            sx={{
              height: 40,
              width: 40,
              backgroundColor: "success.main",
              color: "#fff",
            }}
          >
            <BorderColorIcon />
          </Button>

          <Button
            sx={{
              height: 40,
              width: 40,
              backgroundColor: "error.main",
              color: "#fff",
            }}
            aria-lable="sub"
            onClick={() => setRemove(!remove)}
          >
            <DeleteForeverIcon />
          </Button>
        </CardContent>
      </Card>

      <Dialog
        // fullScreen={fullScreen}
        open={remove}
        onClose={() => setRemove(!remove)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Product Delete Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once the product is deleted there will be no reverting back the
            product !!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setRemove(!remove)}>
            Disagree
          </Button>
          <Button onClick={() => { 
            console.log("AGREE")
            dispatch(deleteProduct({id:props.id}))
            setRemove(!remove)}} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

    <Dialog
    open={edit}
    onClose={()=>setEdit(!edit)}
    aria-labelledby="responsive-dialog-title"
    >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
        <CardMedia
          component="img"
          height="150"
          sx={{ height: { xs: 300 } }}
          image={props.photo}
          alt="Product Image"
        />
            <TextField sx={{m:'10px 0px'}} id="name" label='Name' defaultValue={props.name} onChange={inputChangeHandler} />
            <TextField sx={{m:'10px 0px'}} id='cost' label ='Cost' defaultValue={props.cost}  onChange={inputChangeHandler} type='number' />
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={() =>  {
            setInputDetails(cardDetails)
            setEdit(!edit)
            }}>
            Cancel
          </Button>
          <Button onClick={() => {
            // setCardDetails(inputDetails)
            dispatch(editProduct({
              id:props.id,
              cost:inputDetails.cost,
              name:inputDetails.name,
              photo:inputDetails.photo,
              stock:inputDetails.stock,
              selected:props.selected
            }))
            setEdit(!edit)
            }} autoFocus>
            Save
          </Button>
        </DialogActions>
    </Dialog>

    </>
  );
};

export default EditCard;
