import React from "react";

const Home = () => {
    return (
        <div className="vh-100 d-flex align-items-center" style={{ backgroundColor: "#343a40", color: "white", overflow: "hidden" }}>
            <section className="container py-5 w-100">
                <div className="row align-items-center h-100">
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-4 fw-bold">Welcome to Our Library</h1>
                        <p className="lead">Discover a world of knowledge and adventure with our extensive collection of books.</p>
                        <a href="/" className="btn btn-primary btn-lg">Explore Now</a>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="https://img.pikbest.com/element_our/20230714/bg/9f4d16e050e9b.png!sw800" alt="Library" className="img-fluid rounded" style={{ maxWidth: "100%", height: "100vh", objectFit: "cover" }} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
