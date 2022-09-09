import React, { Component } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from '../context';
import {v4 as uuid} from "uuid";
import axios from 'axios';
class AddProject extends Component {
    state={
        imageURL:"",
        title:"",
        exert:"",
        body: "",
        submitMessage: "",
        submitMessageTextColor: "",
    };
    onNameChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };

    onBodyChange = (value)=>{
        this.setState({
            body:value,
        });
    };

    onSubmit= async (handler, event)=>{
        event.preventDefault();

        const newProject={
            id: uuid(),
            imageURL: this.state.imageURL,
            title: this.state.title,
            exert: this.state.exert,
            body: this.state.body,
        };

        const responce =await axios.post("http://127.0.0.1:5000/api/project", newProject);

        const isSucessfull=responce.data.isSucessfull;

        if (isSucessfull){
            this.setState({
                submitMessage:`Project published sucessfully`,
                submitMessageColor:"text-success",
            });
        }
        else{
            this.setState({
                submitMessageColor:"text-danger",
                submitMessage:"Publish Failed:("
            })
        }
        handler("ADD_PROJECT",newProject);
    };
  render() {
      return(
        <Consumer>
            {(value)=>
              {
                const {submitMessage,submitMessageColor, imageURL , title ,body}=this.state;
                const{handler}=value;
               return (<div className='container-fluid my-5 py-5 '>
                <h1 className="text-center font-weight-light"> Add <span className="text-warning">Project</span></h1>
                <div className="row px-3 px-lg-5 ">
                <div className="col-12 col-lg-6 px-lg-5">
                    <form onSubmit={this.onSubmit.bind(this, handler)}>
                            <div className="form-group">
                                <label htmlFor="imageURL">
                                    Image URL*
                                </label>
                                <input type="text" 
                                name='imageURL' 
                                className='form-control' 
                                onChange = {this.onNameChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">
                                    Title*
                                </label>
                                <input type="text" name='title' className='form-control' onChange = {this.onNameChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exert">
                                    Exerpt*
                                </label>
                                <textarea name="exert" className='form-control' rows="5" onChange = {this.onNameChange}></textarea>
                                
                            </div>
                            <SimpleMDE
                            onChange={this.onBodyChange}
                            options={{                          
                                hideIcons: ["preview", "side-by-side", "fullscreen"],
                            }}
                            />
                            <button type='submit' className='btn btn-dark col-12 my-3' style={{backgroundColor:"black"}}>
                                Publish
                            </button>
                        </form>
                        <div className="py-5 mx-2 text-center">
                    <h5 className= {submitMessageColor}>{submitMessage}</h5>
                </div>
                </div>
                <div className="col-12 col-lg-6 markdown" >
                    <div className="justify-content-center">
                        <img className='img-fluid' src={imageURL} alt={title} />
                    </div>
                    <h1 className="font-weight-light text-center my-5">{title}</h1>
                    <ReactMarkdown children ={body} />
                </div>
                </div>
                </div>);
              }
            }
        </Consumer>
    )    
  }
}
export default AddProject;