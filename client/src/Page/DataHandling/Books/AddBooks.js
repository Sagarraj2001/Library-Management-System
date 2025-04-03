import { useState } from "react"
import axios from "axios";


const AddBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [url, setUrl] = useState("");


    const handleClear = () => {
        setTitle("");
        setAuthor("");
        setUrl("")
    }
    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/addbook", { title, author, url })
            .then(res => {
                if (res.data.message === "Success") {
                    alert("book issued Sucessfully");
                    handleClear();
                }
                console.log(res);
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
                        <h2 className="text-center mb-4">Add Books</h2>
                        <form onSubmit={handleSubmit}>
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
                            <button type="submit" className="btn btn-success w-100">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBooks
