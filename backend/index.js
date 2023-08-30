
const express=require("express");

const { v4: uuid } = require('uuid');

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

 let paytmMerchantkey = process.env.MERCHANT_KEY;
 let paytmParams = {};
paytmParams['MID'] = process.env.MID,
paytmParams['WEBSITE'] = process.env.WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PCHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8080/callback'
paytmParams['EMAIL'] = 'kunaltyagi@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'
exports.paytmMerchantkey=paytmMerchantkey
exports.paytmParams=paytmParams