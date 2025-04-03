import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ role }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Apna Library</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/book">Books</Link>
            </li>
            
            {role === 'admin' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/addbook">Add Books</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addstudent">Add Student</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
              </>
            )}

            {role === '' ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
