const jwt=require("jsonwebtoken");
const bp=require("bcrypt");
const studentModel=require("../Model/Student");

exports.StudentRegister=async(req,res)=>{
    try{
        const{roll,username,password,dept}=req.body;
        const student=await studentModel.findOne({username});
        if(student){
            return res.json({message:"Student Registered"});
        }
        const hashpassword=await bp.hash(password,10);
        const newStudent=new studentModel({
            username,
            password:hashpassword,
            roll,
            dept
        })
        await newStudent.save()
        return res.json({registered:true});
    }catch(err){
        return res.json("error in registration");
    }
}