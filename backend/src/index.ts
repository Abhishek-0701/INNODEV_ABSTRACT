import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log("connected to database"));
const app =express();
app.use(express.json());
app.use(cors());


app.get("/test",async (req,res)=>{
    res.json({"message":"hello"})
});


app.listen(8000,()=>{
    console.log("Server started sucessfully at port 8000");
})