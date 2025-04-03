const {login,logout,verify}=require("../Controllers/Auth");
const express=require("express");
const verifyUser=require("../Middleware/verifyUser")

const router=express.Router();

router.post("/login",login)
router.get("/logout",logout);
router.get("/verify",verifyUser,verify);


module.exports=router