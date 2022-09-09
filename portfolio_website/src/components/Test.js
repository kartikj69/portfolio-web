import React, { Component } from 'react'
import axios from "axios";

export default  class Test extends Component {

    onClick=async()=>{
        const responce = axios.get("");
        console.log(responce); 
    };

  render (){return (
    <div className='py-5 my-5'>
        <button className='btn btn-dark btn-lg' onClick={this.onClick}>
            Click me!
        </button>
    </div>
  )
}}
