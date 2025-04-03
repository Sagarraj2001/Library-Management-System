const Student=require("../Model/Student");
const Admin=require("../Model/Admin");
const Book=require("../Model/Book");

exports.dashboard=async(req,res)=>{
    try{
        const student=await Student.countDocuments();
        const admin=await Admin.countDocuments();
        const book=await Book.countDocuments();
        return res.status(200).json({success:true,student,admin,book});
    }
    catch(err){
        return res.json(err);
    }
}