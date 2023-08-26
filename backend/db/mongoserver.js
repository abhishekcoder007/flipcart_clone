const mongo=require("mongoose");


//const URL="mongodb+srv://ABHISHEK:RAJABABU@43@cluster0.gafd9fo.mongodb.net/flipcart?retryWrites=true&w=majorit"


const Connection=async(username,password)=>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.gafd9fo.mongodb.net/flipcart?retryWrites=true&w=majority`;
    try{
       await mongo.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true}
)

console.log("MONGODB STARTED")
    }catch(err){
        console.log("ERR",err.message)
    }
}

module.exports=Connection;
