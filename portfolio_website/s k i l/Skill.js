import React from 'react'
function Skill(props) {
    const{name, imgURL, starsTotal, starsActive} =props.Skill;
  return (
    <div>
        <img
          className="rounded-circle img-fluid"
          src={imgURL}
          alt={name}
          style={{width: "100px" ,height: "100px"}}
        />
        <div>
          {/* <span class="text-info">★</span>
          <span class="text-info">★</span>
          <span class="">★</span> */}
        </div>
    </div>
  );
}
export default Skill;