const express=require("express");
const {StudentRegister}=require("../Controllers/StudentController");
const VerifyAdmin=require("../Middleware/VerifyAdmin");
const router=express.Router();

router.post("/student",VerifyAdmin,StudentRegister);

module.exports=router