/* eslint-disable no-undef */
import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-expand-md fixed-top bg-light shadow">
        <div className="container my-2">
          <Link to="/" className="navbar-brand text-dark font-weight-bold">
            Kartik Jindal
          </Link>
          <Link to="/contact" className="ml-auto mx-3">
            <button className="btn btn-outline-warning " href="/contact">
              Contact me
            </button>
          </Link>          
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapseNav"            
          >
            <span className="fas fa-bars text-dark"></span>
          </button>
  
          <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
            <div className="navbar-nav"  >
            <Link to="all/projects" className="nav-item nav-link text-dark h6 mx-1  my-auto text-right">
                Projects
              </Link>
              <Link to="/all/blogs" className="nav-item nav-link text-dark h6 mx-1  my-auto text-right">
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>   
    )
}
export default Navbar;