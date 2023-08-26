import React from 'react';

import Slide from '../slide/slide';
import { Box, Divider} from '@mui/material';
import { Typography,styled } from '@mui/material';

const Mainbox=styled(Box)`
display:flex;

`;

const Imagebox=styled(Box)(({theme})=>({
  width:"80vw",
 [theme.breakpoints.down("md")]:{
  width:"100vw",
 }
}))
const Advertisementbox=styled(Box)(({theme})=>({
  backgroundColor:'blue',
width:'100%',
margin:'5px 11px 5px 5px',
[theme.breakpoints.down("md")]:{
  display:"none",
}
}))




const Topslider = ({product,title}) => {
  return (
   
<Mainbox>
    <Imagebox >
  <Slide product={product} title={title}/>
    </Imagebox>
    <Advertisementbox>
     
           {/* < Typography>ADDVERTISMENT HERE</Typography> */}
           <img style={{width:"100%",height:"100%"}} src="https://www.exchange4media.com/news-photo/116508-big.jpg" />
     

    </Advertisementbox>
  </Mainbox>
      
   
  )
}

export default Topslider
