import React from 'react';
import { Consumer } from '../context';
import ProjectCard from './ProjectCard';

export default function AllProjects() {
  return (
    <Consumer>
        {(value)=>
        {
            return(
                <div className="container text-center my-5 py-5">
              <h1 className="font-weight-light">
                All my <span className="text-warning">Projects</span>
              </h1>
                <div className="row my-5 pt-3">
                    {value.projects.map((project) =>(
                        <div key={project.id} className="col-12 col-md-6 my-2">
                            <ProjectCard project={project} />
                        </div>
                    ))}
        
                </div>
            </div>
            )
        }
        }
    </Consumer>
  )
}
