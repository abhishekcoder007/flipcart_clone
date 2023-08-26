
const express=require("express");

const Connection=require("./db/mongoserver.js")
const dotenv=require("dotenv")
const Putdata=require("./default.js")
const router =require("./routes/route.js");
const cors=require('cors')

const app=express();
app.use(cors())
app.use(express.json())

dotenv.config();
const password=process.env.DB_PASSWORD;
const username=process.env.DB_USERNAME;

Connection(username,password);

app.use("/",router)


app.listen(8080,()=>{
    console.log("server sarted");

})

Putdata()