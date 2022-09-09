import React from "react";
// import sa from "sdasdsa.gif";

function Title(){
    const name = "Kartik Jindal"
    const leadTest = "I am a freelance developer from India"
    return(
        <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src="https://i.postimg.cc/WtcPvCNY/sdasdsa.gif"
            alt="your name"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{fontSize: "50px"}}>
            Hi, I am <span className="text-warning"> {name}</span>
          </div>
          <h4 className="font-weight-light">{leadTest}</h4>
        </div>
      </div>
    </div>
    );
}
export default Title;