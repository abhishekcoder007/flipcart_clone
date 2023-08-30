const express = require('express');
const router = express.Router();
const productDetail=require("../controller/productDetail")
const handlepaytm=require("../controller/handlepaytm.js")


const { product, flipusers } = require("../model/product-schema.js");

let data={};


router.post("/signup", async (req, res) => {
    const userData = req.body;
              const userdataindatabase= await flipusers.find({mobile:userData.mobile})
              console.log("datrer"+typeof(userdataindatabase))
    if(userdataindatabase.length<1){
    try {
        const insertedData = await flipusers.create(userData);
        console.log(insertedData);
        res.send(insertedData);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting data into the database.");
    }}else{
        res.send("mobile no. is already present");
    }
});

router.get("/signup", (req, res) => {
    // Handle signup logic here
 
    res.send(req.body); // Example response
});


// product related routes

router.get("/product",async function(req,res){
   const data= await product.find({})
   console.log(data)
   res.send(data);
})

router.get("/product/:id" , productDetail)

// for payment product

router.post("/paytm",handlepaytm)

module.exports = router;
