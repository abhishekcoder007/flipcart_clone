import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material';
import {bannerData} from "../../data/carouseldata.js";

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Image=styled("img")(({theme})=>({
  height:"280px",width:"100%",
 [theme.breakpoints.down("md")]:{
  objectFit:"cover",
  height:180,
 }
}))


const Carosel = () => {
  return (
    <div style={{backgroundColor:"#fff",padding:"11px"}}>
         <Carousel responsive={responsive}   dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"   infinite={true}
  autoPlay={true}  autoPlaySpeed={2000}   swipeable={false}
  draggable={false}   transitionDuration={1000}>
        {bannerData.map((ele)=>(<>
           
  <div><Image alt="image of product"   src={ele.url}/></div>




        </>))}
        </Carousel>
    
    </div>
  )
}

export default Carosel
