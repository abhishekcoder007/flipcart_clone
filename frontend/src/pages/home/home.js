import React ,{useEffect}from 'react'
import Navbar from '../../component/navbar/navbar'
import Upperbody from '../../component/upperBody/Upperbody'
import Carosel from '../../component/carosel/Carousel';
import { useDispatch,useSelector } from 'react-redux';
import {productAction}  from "../../reduxstore/action/productAction"
import Slide from '../../component/slide/slide';
import Topslider from '../../component/topslider/Topslider';
import Bannerproduct from '../../component/banner/Bannerproduct';
import { useParams } from 'react-router-dom';
import { UseSelector } from 'react-redux/es/hooks/useSelector';


const Home = () => {

  // const {id}=useParams()
const dispatch=useDispatch();
const {product}=useSelector(state=>state. productReducer)
console.log(product)
    useEffect(()=>{
   
         dispatch(productAction())

    },[dispatch])
   
  return (
    <div>
       <Navbar/>
     
      <Upperbody/>
      <Carosel/>
      
      <Topslider product={product} title="Deals of Day"/>
      <Slide product={product} title="Deals of Day"/>
      <Bannerproduct/>
      <Slide product={product} title="Tranding Deals of Day "/>
      <Slide product={product} title="Deals of Day"/>
      <Slide product={product} title="Deals of Day"/>
    </div>
  )
}

export default Home
