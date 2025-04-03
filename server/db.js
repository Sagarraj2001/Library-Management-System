const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config();

const connection=async()=>{
    try{
        mongoose.connect(process.env.URL)
        console.log("Database Connected Successfully");
    }catch(err){
        console.log(err);
    }
}

connection()