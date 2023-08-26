import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import {useSelector} from "react-redux";
// import style from "./slide.module.css";
import { Box, Divider} from '@mui/material';
import { Typography,styled } from '@mui/material';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Slide = ({product,title}) => {

  // const{product}=useSelector(state=>state.productReducer)

const Navigate=useNavigate();


  const handleClick=(id)=>{
    Navigate(`/product/${id}`)
  }
  const Maincomponent=styled(Box)`

  background-color:#FFFFFF;
 
  
  `;
const Text=styled(Typography)`
font-size:14px;

`
  const Dealbox=styled(Box)`
  display:flex;
  padding:11px 15px;
  background-color:#FFFFFF;
 
  justify-content:space-between;
  margin:11px 0 0px 0;
  `;
  const Typodealtext=styled(Typography)`
      font-weigth:900;
      font-size:22px;
  
  `
  const Image=styled("img")({
    width:"auto",
    height:"150px",
  })
  
  const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <div>
      <Maincomponent>

     
      <Dealbox>
        <Typodealtext>{title}</Typodealtext>
        <Button variant="contained">View All</Button>
      </Dealbox>
      <Divider/>
      {/* <div style={{backgroundColor:"#fff",padding:"11px"}}> */}
         <Carousel responsive={responsive}  
          dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"   infinite={true}
  autoPlay={true}  autoPlaySpeed={2000}   swipeable={false}
  draggable={false}   transitionDuration={1000}   
  > 
     
        {product?.map((ele)=>(
        <Box style={{alignItems:"center",padding:"15px"}} onClick={()=>handleClick(ele.id)}>
         
       <Link to="/product/1" style={{textDecoration:"none"}}><Image alt="image of product"   src={ele?.url}/>
       <Text style={{fontWeight:700,color:"#212121"}}>{ele?.title?.shortTitle}</Text>
       <Text style={{color:"green"}}>{ele?.discount}</Text>
       <Text style={{opacity:0.6}}>{ele?.tagline}</Text></Link>

  </Box>


      
        ))}
         {/* </div> */}
        
        </Carousel>
        </Maincomponent>
    </div>
  )
}

export default Slide
