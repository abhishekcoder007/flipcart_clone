
import axios from "axios";

export const productAction=()=>{ 
    
   return async  (dispatch)=>{
  try{

const product= await axios.get('http://localhost:8080/product')
// console.log(data)

const {data}=product
        
        console.log(product+"hello my name is"+data);
        dispatch({type:"success" , payload:data})
  }catch(err){
    console.log("hello my name is");
    dispatch({type:"error" , payload:err.message})
  }

}}


export const getproductdetail=(id)=>{


  return async function (dispatch){

try{
  const product= await axios.get(`http://localhost:8080/product/${id}`)
          dispatch({type:"PRODUCTDETAILsuccess",payload:product.data})
}catch(error){
  dispatch({type:"PRODUCTDETAILfail",payload:error.message})
}

  }
}