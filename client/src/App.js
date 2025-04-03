import React, { useState,useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Page/Home';
import Login from './Page/Authentication/Login';
import Dashboard from './Page/Dashboard/Dashboard';
import AddStudent from './Page/DataHandling/Student/AddStudent';
import AddBooks from "./Page/DataHandling/Books/AddBooks";
import Logout from './Page/Authentication/Logout';
import Book from "./Page/DataHandling/Books/Book";
import EditBooks from "./Page/DataHandling/Books/EditBooks";
import DeleteBook from "./Page/DataHandling/Books/DeleteBook";

const App = () => {
  const [role, setRole] = useState('');
  axios.defaults.withCredentials = true;
    useEffect(() => {
    axios.get("http://localhost:5000/api/verify")
        .then(res => {
            if (res.data.login) {
                setRole(res.data.role);
            } else {
                setRole('');
            }
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
}, []);

  return (
    <Router>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/book" element={<Book role={role} />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route path="/dashboard" element={ <Dashboard />} />
        <Route path="/addstudent" element={ <AddStudent />} /> 
        <Route path="/addbook" element={ <AddBooks /> } />
        <Route path="/editbook/:id" element={ <EditBooks /> } />
        <Route path="/deletebook/:id" element={ <DeleteBook/> } />
        <Route path="/logout" element={<Logout setRole={setRole} />} />
      </Routes>
    </Router>
  );
};

export default App;
