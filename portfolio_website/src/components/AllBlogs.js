import React from 'react';
import { Consumer } from '../context';
import BlogCard from './BlogCard';

export default function AllBlogs() {
  return (
    <Consumer>
        {(value)=>
        {
            return(
                <div className="container text-center my-5 py-5">
              <h1 className="font-weight-light">
                All my <span className="text-warning">Blogs</span>
              </h1> 
                <div className="row my-5 pt-3">
                    {value.blogs.map((blog) =>(
                        <div key={blog.id} className="col-12 col-md-6 my-2">
                            <BlogCard blog={blog} />
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
