import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return(
    <footer>
      <div className="container-fluid text-center" style={{backgroundColor: "black" }}>
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
          </Link>          
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-warning pb-3">More links</h5>
            <Link to="/all/blogs" className="text-info d-block">Blogs</Link>
            <Link to="/" className="text-info d-block">Home</Link>
            <Link to="/contact" className="text-info d-block">Contact me</Link>
            <Link to="/Write-a-recomm" className="text-info">
              Write a recommendation <i className="fas fa-heart" style={{color: "crimson"}}></i>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus nulla gravida orci a odio sit
              aliquip ut nullam.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-warning pb-3">Social</h5>
            <Link  to="https://www.linkedin.com/in/kartik-jindal-723113206/">
              <i className="fab fa-linkedin text-info h1 d-block"></i>
            </Link> 
            <Link  to="https://github.com/kartikj69">
              <i className="fab fa-github text-light h1 d-block"></i>
            </Link> 
            <Link  to="mailto: kj5725@srmist.edu.in">
              <i className="fas fa-envelope text-secondary h1 d-block"></i>
            </Link> 
          </div>
        </div>
        <div className="text-muted py-3">
          <p>Copyright © Kartik Jindal 2021</p>
        </div>
      </div>
    </footer>
    );
}
export default Footer;