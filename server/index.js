const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const AuthRoutes=require("./Routes/AuthRoute");
const StudentRoute=require("./Routes/StudentRoutes");
const BookRoute=require("./Routes/BookRoute");
const DashboardRoute=require("./Routes/DashboardRoute")
require("./db");



const app=express();
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(cookieParser())

dotenv.config();

app.use("/api",AuthRoutes)
app.use("/api",StudentRoute)
app.use("/api",BookRoute)
app.use("/api",DashboardRoute)



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})