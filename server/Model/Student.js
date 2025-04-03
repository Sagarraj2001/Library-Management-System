 const mongoose=require("mongoose");


 const StudentSchema=new mongoose.Schema({
    roll:{type:String},
    dept:{type:String},
    username:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    
 });

 const StudentModel=mongoose.model("Student",StudentSchema);

 module.exports=StudentModel