const jwt = require("jsonwebtoken");


const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Invalid User" });
    }
    else {
        jwt.verify(token, process.env.Admin_Key, (err, decoded) => {
            if (err) {
                jwt.verify(token, process.env.Student_Key, (err, decoded) => {
                    if (err) {
                        return res.status(401).json({ message: "Invalid Token" });
                    }
                    else {
                        req.username = decoded.username;
                        req.role = decoded.role;
                        next()
                    }
                }
                )
            }
            else {
                req.username = decoded.username;
                req.role = decoded.role;
                next()
            }
        })
    }


};


module.exports = verifyUser;
