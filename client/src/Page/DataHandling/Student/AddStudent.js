import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddStudent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [roll, setRoll] = useState("");
    const [dept, setDept] = useState("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleClear = async () => {
        setUsername("");
        setPassword("");
        setRoll("");
        setDept("");
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
         axios.post("http://localhost:5000/api/student", { username, password, dept, roll })
        .then(res=>{
            if(res.data.registered){
                alert("successfully");
                handleClear();
                navigate("/dashboard")
            }
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    };
    return (
        <>
            <div style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4E12AQHKaI0ODVN7ww/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677147422020?e=2147483647&v=beta&t=JUlFOxJB2egeqwwisUKVI2IvtwJYqdkv0w6NDKPvj2Y')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}></div>
                <div className="container d-flex justify-content-center align-items-center vh-100">
                    <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px", background: "rgba(255, 255, 255, 0.9)", position: "relative" }}>
                        <h2 className="text-center mb-4">Add Student</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Roll No.</label>
                                <input className="form-control" value={roll} onChange={(e) => setRoll(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">dept</label>
                                <input className="form-control" value={dept} onChange={(e) => setDept(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-success w-100">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStudent
