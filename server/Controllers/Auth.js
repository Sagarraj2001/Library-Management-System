const jwt = require("jsonwebtoken");
const bp = require("bcrypt");
const Admin = require("../Model/Admin.js");
const studentModel =require("../Model/Student.js");


exports.login = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        if (role === 'admin') {
            const admin = await Admin.findOne({ username })
            if (!admin) {
                return res.json("Admin not Registered");
            }
            const validPassword = await bp.compare(password, admin.password);
            if (!validPassword) {
                return res.json({ message: "wrong password" });
            }
            const token = jwt.sign({ username: admin.username, role: 'admin' }, process.env.Admin_Key)
            res.cookie('token', token, { httpOnly: true, secure: true })
            return res.json({ login: true, role: 'admin' })
        }
        else if (role === 'student') {
            const student = await studentModel.findOne({ username })
            if (!student) {
                return res.json("Student not Registered");
            }
            const validPassword = await bp.compare(password, student.password);
            if (!validPassword) {
                return res.json({ message: "wrong password" });
            }
            const token = jwt.sign({ username: student.username, role: 'student' }, process.env.Student_Key)
            res.cookie('token', token, { httpOnly: true, secure: true })
            return res.json({ login: true, role: 'student' })
        }
        else {

        }
    }catch(err){
        console.log(err);
    }
}



exports.logout = async (req, res) => {
   res.clearCookie('token');
   return res.json({logout:true});
};



exports.verify=async(req,res)=>{
    return res.json({login:true,role:req.role})
}
