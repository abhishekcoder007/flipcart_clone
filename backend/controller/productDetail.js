
 const { product, flipusers } = require("../model/product-schema");

const productDetail=async(req,res)=>{
    const id=req.params.id;
   
  const data= await product.findOne({"id":id})
  if(data){
    res.send(data)
  }else{
    res.status(500).send ({"message":"not found product"})
  }
}

module.exports=productDetail;