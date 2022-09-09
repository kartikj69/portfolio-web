import React from 'react';
import {v4 as uuid} from "uuid";
import RecommCard from './RecommCard';
import {Consumer} from "../context";

export default function RecommSec() {
    return(
<Consumer>
  {
    (value)=>{
      const {recomms} =value;
      return (
        <div className="container-fluid my-5">
          <div
            className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar"
          >
            {recomms.map((recomm) =>(
                    <div key={uuid()} className="col-6 col-md-4">
                        <RecommCard recomm={recomm} />
                    </div>
                ))}
        </div>
        </div>
      );
    }
  }
</Consumer>
    )
}
