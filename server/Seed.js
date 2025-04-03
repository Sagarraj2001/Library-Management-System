const express =require("express");
const bp=require("bcrypt");
const Admin=require("./Model/Admin.js");
require("./db");



async function adminAccount(){
try{
    const adminCount=await Admin.countDocuments();
    if(adminCount===0){
        const hashPassword= await bp.hash('adminpassword',10)
        const newAdmin=new Admin({
            username:"admin",
            password:hashPassword
        })
        await newAdmin.save()
        console.log("Account Created");
    }
    else{
        console.log("Account already exists");
    }
} catch(err){
    console.log(err);
}
}

adminAccount()