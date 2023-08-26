
const mongoose=require("mongoose");

const productschema=new mongoose.Schema({
    id:{type:String,
    required:true,
    unique:true,
    },
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String,


})

const users_schema=new mongoose.Schema({
  name:String,
    password:{
        type:String,
        required:true,
    },
    email:{
     type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    image:String
})

const flipusers=mongoose.model("flipusers",users_schema)

const product = mongoose.model("product",productschema);

module.exports = { product, flipusers };