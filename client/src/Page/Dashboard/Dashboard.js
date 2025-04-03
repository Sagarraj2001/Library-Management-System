import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/dashboard")
      .then(res => {
        if (res.data.success) {
          setStats([
            { title: "Admin Active", count: res.data.admin },
            { title: "User Active", count: res.data.student },
            { title: "Book Issue", count: res.data.book }
          ]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Dashboard Overview</h1>
      <div className="row justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-8 col-10 mb-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{stat.title}</h5>
                <p className="card-text display-6 fw-bold">{stat.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;