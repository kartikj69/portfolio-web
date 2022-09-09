import React from 'react'
import BlogCard from './BlogCard';

 function BlogSec() {
    const Blogs =[
        {
            id:1,
            title:"Blog 1",
            exert:"This is my Blog about...",
            imageURL:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        },
        {
            id:2,
            title:"Blog 2",
            exert:"This is my Blog about...",
            imageURL:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        },
        {
            id:3,
            title:"Blog 3",
            exert:"This is my Blog about...",
            imageURL:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        },
    ];
  return (
    <div className="container text-center my-5">
      <h1 className="font-weight-light">
        My <span className="text-warning">Blogs</span>
      </h1>
      <div className="lead">I build products. Just like this website</div>
        <div className="row my-5 pt-3">
            {Blogs.map((Blog) =>(
                <div key={Blog.id} className="col-12 col-md-4 my-2">
                    <BlogCard title={Blogs.title} exert={Blogs.exert} imageURL={Blogs.imageURL} />
                </div>
            ))}
        <div className="col-12 col-md-4 my-2"></div>
        </div>
      <div className="my-5">
        <a href="/" className="text-dark text-right">
          <h5>
            See my Blogs
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
  );
}
export default BlogSec;