
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { InputBase, ListItem,List, Toolbar,Typography,styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch,useSelector } from 'react-redux';
import {productAction} from "../../reduxstore/action/productAction";
import { Link,useNavigate } from 'react-router-dom';




const CustomizedApp= styled(Box)`
  background: white;
  margin-left:51px;
  margin-bottom:11px;

 


`;
const Customizedinput= styled(InputBase)`
  background: white;
  width:38vw;
  padding-left:21px;
  border:2px sloid red;
  
 `;

 const Searchresult=styled(List)`
 margin-top:5px;
 background-color:white;
 position:absolute;
 color:black;
 `


const Inputbox = () => {
  const[text,settext]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate()
const handleClick=(id)=>{
  console.log(id)

  navigate(`/product/${id}`)
  settext("")
}
  useEffect(()=>{
         dispatch(productAction())
  },[])
const {product}=useSelector((state)=>state.productReducer)
  const getText=(value)=>{

    settext(value.trim())

    // const data= 

  }
  console.log(product)
  return (
    <div>
        <CustomizedApp>
        <Customizedinput placeholder='enter product name' value={text} onChange={(e)=>getText(e.target.value)}/>  

     
        <SearchIcon  color="success" />

        </CustomizedApp>
        {text.trim() &&
        <Searchresult>
  
    {product
      ?.filter(
        (ele) =>
          ele.title.longTitle?.toLowerCase().includes(text.trim().toLowerCase())
      )
      .map((ele) => (
     <ListItem key={ele.id}
       onClick={()=>handleClick(ele.id)}>{ele?.title?.longTitle}</ListItem>
      ))}
</Searchresult>
}

     
    </div>
  )
}

export default Inputbox
