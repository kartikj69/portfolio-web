import React from 'react'

export default function RecommCard(props) {
    const {recom , name , desig } = props.recomm;
  return (
    <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-text">
                {recom}
              </h4>
              <p className="card-text text-secondary mb-0">{name}</p>
              <p className="card-text text-secondary">
              {desig}
              </p>
            </div>
    </div>
  )
}
