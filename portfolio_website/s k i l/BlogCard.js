import React from 'react'

function BlogCard(props) {
    const {title, exert, imageURL}=props;
  return (
    <div className="card shadow h-100">
            <img
              className="card-img-top"
              src={imageURL}
              alt={title}
            />
            <div className="card-body">
              <h4 className="card-title">
                {title}
              </h4>
              <p className="card-text">{exert}</p>
              <a href="/" className="stretched-link"></a>
            </div>
          </div>
  );
}
export default BlogCard;