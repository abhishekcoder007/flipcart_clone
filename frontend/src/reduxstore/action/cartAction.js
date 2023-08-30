
import axios from "axios"

export const Addtocart=(id,quantity)=>{

    return async (dispatch)=>{
        try{

        const {data}= await axios.get(`http://localhost:8080/product/${id}`)
                  dispatch({type:"cartdataaddsucess", payload:{...data,quantity:0}})

        }catch(err){
            dispatch({type:"cartdataaddfail", payload:err.message})

        }
    }
}

export const Removecartitem=(id)=>{

    return  (dispatch)=>{

        
                   dispatch({type:"cartremoveitem", payload:id})
 
        

    }
}