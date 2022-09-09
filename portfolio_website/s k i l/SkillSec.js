import React from "react";



function SkillSec() {
    const skills =[
        {
            id:1 ,
            name:"HTML5",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/html5.png",
            sratsTotal: 3,
            starsActive: 3,
        },
        {
            id:2 ,
            name:"CSS",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/css3.png",
            sratsTotal: 3,
            starsActive: 2,
        },
        {
            id:3 ,
            name:"JS",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
            sratsTotal: 3,
            starsActive: 2,
        },
        {
            id:4 ,
            name:"BootStrap",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
            sratsTotal: 3,
            starsActive: 2,
        },
        {
            id:5 ,
            name:"React",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/react.png",
            sratsTotal: 3,
            starsActive: 2,
        },
        {
            id:6 ,
            name:"MySQL",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
            sratsTotal: 3,
            starsActive: 2,
        },
        {
            id:7 ,
            name:"python",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/python.png",
            sratsTotal: 3,
            starsActive: 2,
        },
        {
            id:8 ,
            name:"Flask",
            imgURL:"https://storage.googleapis.com/unschool-portfolio-website/flask.png",
            sratsTotal: 3,
            starsActive: 1,
        },
    ];
    const finalSkillRow = [
       
    ];
    for(let i=0; i<2; i++){
        let SkillRow = skills.slice(i*4, (i+1)*4);
        finalSkillRow.push(
        <div className="d-flex justify-content-around py-3">
           {SkillRow.map((Skill) => (
            <Skill Skill={Skill}/>
           ))}
       </div>
       );
    }
    return (
        <div className="bg-light w-100">
        <div className="container text-center py-5">
          <h1 className="font-weight-light">
            <span className="text-warning">Technology</span> stack
          </h1>
          <div className="lead pb-5">
            I design, develop and deliver with these weapons
          </div>
          <div className="d-flex justify-content-around py-3"></div>
        {finalSkillRow}
        </div>
      </div>
    );
}


export default SkillSec;
