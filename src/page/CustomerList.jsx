import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container, display } from "@mui/system";
import drr from "./drr.jpeg";
import React from "react";

const CustomerList = () => {
  return (
    <div >
      <Typography variant="body2">Customers List</Typography>

    <Table>
        <TableHead>
            <TableRow>
                <TableCell sx={{width:'100px'}}>Avatar</TableCell>
                <TableCell sx={{width:'100px'}}>Name</TableCell>
                <TableCell sx={{width:'100px'}}>Phone No</TableCell>
                <TableCell sx={{width:'100px'}}>DOP</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {[1,2,3].map((ele)=>  <TableRow key={ele} sx={{
            bgcolor:'#fff',
            borderRadius:'10px',
            margin:'10px 0px'
        }} >
            <TableCell sx={{width:'100px'}}><Avatar src={drr}>R</Avatar></TableCell>
            <TableCell sx={{width:'100px'}}>Raghu Ram</TableCell>
            <TableCell sx={{width:'100px'}}>7386986880</TableCell>
            <TableCell sx={{width:'100px'}}>21-11-2001</TableCell>
        </TableRow>)}
      



            <TableRow>
            <Card sx={{ width: "100%", p: 1,borderRadius:2 }}>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Avatar alt="R" src={""} sx={{bgcolor:'#007FFF'}}>R</Avatar>
          <Typography variant="body1">Raghu Ram</Typography>
          <Typography variant="body1">7386986880</Typography>
          <Typography variant="body1">21-11-2001</Typography>
        </CardActions>
      </Card>
            </TableRow>
        </TableBody>
    </Table>
         
      <Toolbar />

      



    </div>
  );
};

export default CustomerList;
