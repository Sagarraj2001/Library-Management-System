const BookModel=require("../Model/Book");

exports.bookRegister=async(req,res)=>{
    try{
        const {title,author,url}=req.body;
        if(!title || !author || !url ){
            return res.status(401).json({message:"enter all details"});
        }
        const newBook=new BookModel({title,author,url});
        await newBook.save();
        return res.status(201).json({message:"Success"});
    }
    catch(err){
        return res.status(500).json({ error: err.message });
    }
}

exports.addBook = async (req, res) => {
    try {
        const books = await BookModel.find(); 
        res.status(200).json({
            success: true,
            message: "Books Found",
            data: books
        });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};


exports.editBook=async(req,res)=>{
    try{
        const id=req.params.id;
        const book = await BookModel.findById(id); 
        return res.json(book);
    }catch(err){
        console.log(err)
    }  
}

exports.updateBook=async(req,res)=>{
    try{
        const id=req.params.id;
        const book = await BookModel.findByIdAndUpdate({_id:id},req.body);
        return res.json({updated:true,book});
    }catch(err){
        console.log(err)
    }  
}

exports.deleteBook=async(req,res)=>{
    try{
        const id=req.params.id;
        const book = await BookModel.findByIdAndDelete({_id:id});
        return res.json({deleted:true,book});
    }catch(err){
        console.log(err)
    }  
}