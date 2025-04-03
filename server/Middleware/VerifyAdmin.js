const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Invalid Admin" });
    }
    else {
        jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Invalid Token" });
            }
            else {
                req.username = decoded.username;
                req.role = decoded.role;
                next()
            }
        })
    }


};


module.exports = verifyAdmin;
