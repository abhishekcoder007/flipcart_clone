import React,{useState} from "react";
import style from"./logindialog.module.css"

import Dialog from '@mui/material/Dialog';
import {styled }from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";

const DialogStyle=styled("div")({
  height:"70vh",
width:"auto",
display:"flex"
// border:2 solid blue,
})
// height:55px;
// weight:55px;
// border:2px solid blue;

// `;
const initialvalue={
  "name":"",
  "email":"",
  "password":"",
  "mobile":"",
}
const Logindialog = ({open,setopen}) => {
let login="";

const [input,setinput]=useState(initialvalue)
const [image,setimage]=useState(initialvalue)
const [error,seterror]=useState("")

function changeHandle(e){
setinput({...input,[e.target.name]:e.target.value})
}
console.log(input)
  const handleClose=()=>{
  setopen(false)
  }

  async function handleSignup(){
    setinput({...input,"image":image})
    console.log( "input:--"+input)
    console.log( typeof(image))
   
try{
     const signupdata=await axios.post("http://localhost:8080/signup",input)
     await axios.get("http://localhost:8080/signup",input)
     console.log(signupdata)
}catch(err){
  seterror("mobile no is already present")
  console.log("errr:==="+err)
}
  }

return (
    <div>
        <Dialog onClose={handleClose} open={open}>
          <DialogStyle>
        <div className={style.leftmain}>
          <h2>Login</h2>
          <p>Get access to your</p>
          <p> Orders,Wishlist and </p>
          <p>commendations</p>
          <div>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" />
          </div>

        </div>
        <div className={style.rightmain}>
          {login?
          <>
        <p>Enter,Email/Mobile No.</p>
        <div className={style.inputstyle}>
     <span> 91  | </span> <input/>
    
        </div>
        <p style={{marginTop:"9px",wordSpacing:"3px",marginBottom:"0px",fontSize:"11px",letterSpacing:"1px",marginLeft:"21px"}}>By continuing you are <span  style={{color:"red",fontFamily:"italic",fontWeight:'bold'}}>agree</span> to term and <span  style={{color:"red",fontWeight:'bold'}}>privcy </span></p>
        <p style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px",letterSpacing:"1px",marginLeft:"21px"}}>policy</p>
        <div className={style.buttonstyle}>
        <Button sx={{width:"300px",height:"51px"}} variant="contained">Request OTP</Button>
     </div>
     </>
     :
     <>

     <div className={style.register}>
      <input type="name" onChange={(e)=>changeHandle(e)} placeholder="name" name="name" required /><br/>
      <input type="number" onChange={(e)=>changeHandle(e)} placeholder="mobile no." name="mobile" required /><br/>
      {error?<p>{error}</p>:""}
      <input type="email"  onChange={(e)=>changeHandle(e)}  placeholder="email" name="email" required /><br/>
      <input type="password" onChange={(e)=>changeHandle(e)} placeholder="password"  name="password" required /><br/>
      <input type="file" onChange={(e)=>setimage(URL.createObjectURL(e.target.files[0]))} placeholder="image"  name="image" required /><br/>
      <button onClick={handleSignup} >submit</button>
      <img src={image} style={{width:"50px",height:"50px"}}/>

     </div>
     
     
     </>
     
     
     
     };
        </div>
          </DialogStyle>
          
        </Dialog>
    </div>
  )
}

export default  Logindialog;
