const express = require( "express");
const mongoose = require( "mongoose");
const cors= require( "cors");

const app = express();
const port=3000;
app.use(cors({
    origin: "http://localhost:5173",
    "https://client-sepia-six.vercel.app"
}));


app.get( "/soumi" , ( req , res ) => {
    res.send("Hello,Soumya Here :)");
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})



