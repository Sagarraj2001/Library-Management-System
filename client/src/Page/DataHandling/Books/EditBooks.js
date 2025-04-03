import { useEffect, useState } from "react"
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";


const EditBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [url, setUrl] = useState("");
    const {id}=useParams()
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/editbook/${id}`)
        .then(res=>{
            setTitle(res.data.title);
            setAuthor(res.data.author);
            setUrl(res.data.url);
        });
    },[])

    axios.defaults.withCredentials = true;
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/updatebook/${id}`, { title, author, url })
            .then(res => {
                if (res.data.updated) {
                    alert("book Updated Sucessfully");
                    navigate("/book")
                }
            }).catch(err => {
                console.log("error", err);
            })
    }
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
                        <h2 className="text-center mb-4">Edit Books</h2>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-3">
                                <label className="form-label">Book Name</label>
                                <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Author Name</label>
                                <input className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Book URL</label>
                                <input type="text" className="form-control" value={url} onChange={(e) => setUrl(e.target.value)} required />
                            </div>
                            <button type="submit" className="btn btn-warning w-100">Update</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditBooks
