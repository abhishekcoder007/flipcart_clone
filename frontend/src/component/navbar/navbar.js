import React ,{useState}from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { InputBase, Toolbar,Typography,styled } from '@mui/material';
import Inputbox from './inputbox';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Logindialog from '../login/logindialog';
import {Link} from "react-router-dom";


const CustomizedApp= styled(AppBar)`
  background: rgb(40 116 240);
  height:52px;
  display:flex;



`;
const Typographystyle=styled(Typography)`
margin-bottom:11px;
margin-left:101px;

`;

const Buttonstyle=styled(Button)`
width:11%;
height:51%;
background:white;
color:black;
margin-bottom:11px;
margin-left:21px;
font-weigth:800px;




`;
const Ptag=styled(Typography)`

margin-left:21px;
margin-bottom:11px;

`;
var isregister=true;
var islogin=true;
function Navbar() {
  const [open,setopen]=useState(false)
function handleOpen(){
 setopen(true)
}
  return (
    <div>
        <CustomizedApp>
            <Toolbar>

                <Typographystyle>FlipCart</Typographystyle>
           <Inputbox/>
           <Buttonstyle variant="outlined" href="#contained-buttons" onClick={()=>handleOpen()}>{isregister?islogin?"ram":"login":"register"}</Buttonstyle>
          
            <Ptag>Become a Seller</Ptag>
            <Ptag>more</Ptag>
            <Link to={"/cart"} style={{textDecoration:"none",color:"white"}}><Ptag>cart</Ptag></Link>

            </Toolbar>
        </CustomizedApp>
      <Logindialog open={open} setopen={setopen}/>
    </div>
  )
}

export default Navbar
