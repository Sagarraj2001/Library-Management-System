const {bookRegister,addBook, editBook,updateBook,deleteBook}=require("../Controllers/BookController");
const verifyAdmin=require("../Middleware/VerifyAdmin");

const express=require("express");

const router=express.Router();

router.post("/addbook",verifyAdmin,bookRegister);
router.get("/book",addBook);
router.get("/editbook/:id",editBook);
router.put("/updatebook/:id",updateBook);
router.delete("/deletebook/:id",deleteBook);
module.exports=router;