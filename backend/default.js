const products=require("./constant/data.js")
const { product, flipusers } = require("./model/product-schema.js");


const Putdata=async()=>{

    try{
      // const deletedata=await product.deleteMany({})
      const data=await product.insertMany(products)
      console.log("data=" , data)
    }catch(err){
              console.log("error:--" ,err)
    }
}

module.exports=Putdata;