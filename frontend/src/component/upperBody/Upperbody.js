import React from 'react';
import style from "./upperbody.module.css";
import { navData } from '../../data/navdata';
import { styled } from '@mui/material';

const Image=styled("img")(({theme})=>({

[theme.breakpoints.down("md")]:{
  objectFit:"fill",
 
}
}))

const Upperbody = () => {
  return (
    <div className={style.main}>
{navData.map(ele=>(
    <>
    <div className={style.navmain}>
    <div className={style.imgmain}><Image src={ele.url} /></div>
    <p>{ele.text}</p>
</div>
    </>
))}
  
      
    </div>
  )
}

export default Upperbody
