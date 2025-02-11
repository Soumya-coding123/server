const express = require( "express");
const mongoose = require( "mongoose");
const cors= require( "cors" );

const app = express();
const port=3000;
app.use(cors({
    origin: ["http://localhost:5173","https://client-sepia-six.vercel.app"]
}));

app.use(express.json());

mongoose
  .connect("mongodb+srv://soumyasataiah:VVy9o0nBKCfabwSK@cluster0.1shwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

  const userSchema = new mongoose.Schema({
    name: String,
    age: Number
  });
  
  const User = mongoose.model("User", userSchema);

  app.get( "/soumi" , async ( req , res ) => {
    const result= await User.find()
     res.json(result);
});

app.post( "/soumi" , async ( req , res ) => {
     const { name,age }= req.body;
     const newUser=new User({name,age});
     await newUser.save();
     res.json(newUser);
});

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
})
