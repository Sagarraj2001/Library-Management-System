const {dashboard}=require("../Controllers/DashboardController");
const express=require("express");

const router=express.Router();


router.get("/dashboard",dashboard);

module.exports=router