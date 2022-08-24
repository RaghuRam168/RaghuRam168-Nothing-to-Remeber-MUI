import React from "react";
import "./Home.css";
import {motion,Variants} from 'framer-motion'
import addPurchase from "./add-purchase.svg";
import purchaseData from "./purchase.svg";
import edit from "./edit-stock.svg";
import {AiOutlineHome,AiOutlineAppstore,AiOutlineUsergroupDelete,AiFillFund,AiOutlineBarChart,AiOutlineTeam} from 'react-icons/ai'
import {BiCustomize,BiRupee,BiLogOutCircle} from 'react-icons/bi'

// import Expense from "../../components/Expense";
import { Button, duration } from "@mui/material";
import { Route, useNavigate } from "react-router-dom";


const xVal=[-50,-100,10,150]
const yVal=[-50,-100,10,150]
const headingVariants :Variants = {
  hidden:{},
  visible:{
          transition:{
            staggerChildren:.1,
            duration:.5,
            when:'afterChildren'
          }
  }
}

const characterVariants:Variants = {
  hidden:{
    x:xVal[Math.floor(Math.random()*4)],
    y:xVal[Math.floor(Math.random()*4)],
    opacity:0
  },
  visible:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1,
      type:'spring',
      bounce:.6,
    }
  }
}

const leftVariants :Variants= {
  offscreen:{
    x:-200,
    opacity:0
  },
  onscreen:{
    x:0,
    opacity:1,
    transition:{
      type:'spring',
      bounce:0.4,
      duration:2
    }
  }
}

const rightVariants :Variants= {
  offscreen:{
    x:200,
    opacity:0
  },
  onscreen:{
    x:0,
    opacity:1,
    transition:{
      type:'spring',
      bounce:0.4,
      duration:2
    }
  }
}


const imageVariants : Variants={
  offscreen:{
    opacity:0,
    scale:.5
  },
  onscreen:{
    opacity:1,
    scale:1,
    transition:{
      duration:1
    }
  }
}

const Home = () => {

  const navigate = useNavigate()
  const c = 'Nothing_to_Remember'
  return (
    <div>
      {/* <div className="container-1">
        <div className="left">
          <p>Nothing</p>
          <p style={{ color: "#2fa4ff" }}> to</p>
          <p>Remember</p>
        </div>
       <div className="right">
          <img src={brain} alt="NTR" />
        </div>
      </div> */}

<div className='main' >
       
       <motion.p 
         initial='hidden'
         animate='visible'
         variants={headingVariants} 
         className='main-heading'>{c.split('').map(char=> {
           return(
         <motion.div 
              variants={characterVariants}
             whileHover={{
               scale:1.05,
               transition:{
                 duration:1,
                 ease:'easeIn',
                 type:'spring',
                 bounce:.4
               }
             }}
             >{(char==='-')?<br/>:char}
         </motion.div>
         )})}
       </motion.p>
       <p className='main-subheading' >One stop solution to save the customer info and handy analytics on sales and earnings.</p> 
       <Button onClick={()=>navigate('/login')} >Login/Register</Button>
     </div>

      <div className="container-2">
      <motion.div initial='offscreen' whileInView='onscreen' variants={imageVariants} viewport={{once:true, amount:0.4}} className="left">
          {/* <Expense /> */}
        </motion.div>
        <motion.div initial='offscreen' whileInView='onscreen' variants={rightVariants} viewport={{once:true , amount:0.4}} className="right">
          <p className="light">weekly</p>
          <p className="title">Analytics</p>
          <p className="light">
          <span style={{ color: "#2fa4ff" }}> Merchant </span> can view his weeklyactivity
          </p>
          <br></br>
          <p className="light">
          <span style={{ color: "#2fa4ff" }}>Customer </span> can view his Expenses.
          </p>
        </motion.div>
      </div>

      <div className="container-3">
      <motion.div initial='offscreen' whileInView='onscreen' variants={leftVariants} viewport={{once:true , amount:0.4}} className="left">
                <p className="title"><span style={{ color: "#2fa4ff"}}>Add </span></p> 
                <p className="title" > Purchase Details</p>
                <p className="light" >Merchant can add the purchase details by clicking <BiRupee style={{color:"#2fa4ff"}}/>  . This contains product ids' and number of units purchased .</p>
          </motion.div>
          <motion.div initial='offscreen' whileInView='onscreen' variants={imageVariants} viewport={{once:true, amount:0.4}} className="right">
                <img src={addPurchase} alt="Add Purchase Details" />
            </motion.div>
      </div>

      <div className="container-2" >
      <motion.div initial='offscreen' whileInView='onscreen' variants={imageVariants} viewport={{once:true, amount:0.4}} className="left">
            <img src={purchaseData} alt="purchase data" />
      </motion.div>
      <motion.div initial='offscreen' whileInView='onscreen' variants={rightVariants} viewport={{once:true , amount:0.4}} className="right">
          <p className="title" ><span style={{ color: "#2fa4ff"}}>Customer </span>details</p>
          <p className="light">Merchant can access the list of purchase details by clicking<span style={{ color: "#2fa4ff"}}> <AiOutlineUsergroupDelete/></span> . </p>
      </motion.div>
      </div>


      <div className="container-3" >
            <motion.div initial='offscreen' whileInView='onscreen' variants={leftVariants} viewport={{once:true , amount:0.4}} className="left">
                <p className="title" ><span style={{ color: "#2fa4ff"}}>Edit </span>Products</p>
                <p className="light">Merchant can edit the product details by clicking<span style={{ color: "#2fa4ff"}}> <BiCustomize/></span> .Updating or Deleting the products</p>
            </motion.div>
            <motion.div initial='offscreen' whileInView='onscreen' variants={imageVariants} viewport={{once:true, amount:0.4}} className="right" >
            <img src={edit} alt="Edit" />
            </motion.div>
      </div>
    </div>
  );
};

export default Home;
