import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Book = ({ role }) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:5000/api/verify")
      .then(res => {
        if (!res.data.login) {
          navigate("/login");
        }
      })
      .catch(err => {
        console.error("Authentication error:", err);
        navigate("/login");
      });


    axios
      .get("http://localhost:5000/api/book")
      .then((res) => {
        setBooks(res.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, [navigate]);

  

  if (!books.length) {
    return <p className="text-center mt-4">
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="No Books Available"
                className="img-fluid mb-3"
                style={{ maxWidth: "250px" }}
            />
            <h2 className="text-danger">No Books Available</h2>
            <p className="text-muted">It looks like there are no books available at the moment.</p>
        </div>
    </p>;
  }

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
        {books.map((book) => (
          <div className="col d-flex justify-content-center" key={book._id}>
            <div className="card shadow-lg" style={{ width: "18rem" }}>
              <img
                src={book.url}
                className="card-img-top"
                alt={book.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Author: {book.author}</p>
                <div className="d-flex justify-content-between">
                  {role === "admin" && (
                    <>
                      <Link className="btn btn-primary" to={`/editbook/${book._id}`}>
                        <FaEdit className="me-2" /> Edit
                      </Link>
                      <Link className="btn btn-danger" to={`/deletebook/${book._id}`}>
                        <FaTrash className="me-2" /> Delete
                      </Link> 
                    </>
                  )}
                  {role === "student" && <p className="text-muted"></p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
