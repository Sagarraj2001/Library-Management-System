import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteBook = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(()=>{
        axios.delete(`http://localhost:5000/api/deletebook/${id}`)
        .then(res=>{
            if(res.data.deleted){
                navigate("/book")
            }
        })
        .catch(err=>console.log(err));
    },[])
    return (
        <div>

        </div>
    )
}

export default DeleteBook
