import { Avatar, ButtonGroup, Card, CardContent, CardMedia, Grid, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import img from '../data/images/2030ic.jpg'
const Customer = () => {
  return (
<Container  >
<Container sx={{width:'80%' , height:'400px', boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'}} >
        <Toolbar/>


       <Grid container >
            <Grid item xs={4} >
            <Avatar sizes='large ' src=''  >R</Avatar>
            </Grid>
            <Grid item xs={8} >
            <Typography variant='h4' >Raghu Ram</Typography>
            </Grid>
       </Grid>
       
        {/* <Container>
                <Avatar sx={{width:'20vw',height:'20vw'}} src=''  >R</Avatar>
        </Container>
        <Container>
              <Typography variant='h4' >Raghu Ram</Typography>
        </Container> */}

        
            
    </Container>
<Toolbar/>


{[1,2,3,4].map((ele)=><Toolbar>
    <Typography variant='body2' >POD: 21-08-2022</Typography>
<Grid container spacing={2} >

        {[1,2,3,4,5,6,7,8].map((ele)=>
        <Grid item xs={6} ><Card sx = {{maxWidth:'200px', boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px',textAlign:'center'}} >
            <CardMedia component='img' height='150' image={img} alt='img' />
            <CardContent><Typography variant='h6' > 44440 IC Board</Typography></CardContent>
            <CardContent><Typography>quantity : 6</Typography></CardContent>
        </Card></Grid>)}

</Grid></Toolbar>)}


</Container>
    
  )
}

export default Customer