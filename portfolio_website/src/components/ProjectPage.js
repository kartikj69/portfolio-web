import React from 'react'
import { Consumer } from '../context';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
function ProjectPage(props) {
  return(
    <Consumer>
      {
        (value)=>{
          const {projects} = value;
          const id = props.match.params.id;
          const project = projects.filter((project) => project.id === id)[0];
          const{imageURL, title, body} = project ;
          return (
            
            <div className='container markdown py-5 my-5 text-center'>
            <div className="markdown justify-content-center">
                <img className='img-fluid w-100' src={imageURL} alt={title} />
            
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown children ={body} />
          </div>
        </div>
         
          )
        }
      }
    </Consumer>
  )
  
}

export default ProjectPage;