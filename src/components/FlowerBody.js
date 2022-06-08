import React from 'react'



const FlowerBody = (props) => {
    return (
      <div className="card">
        <img src={props.image} alt={props.name} className="card-image" />
        <div className="card-body">
          <p className="card-title">{props.name}</p>
          <p className="card-price">${props.price}</p>
        </div>
        <p className="tag-list">
          {props.tags.map((tag, id) => {
            return <span key={id}>{tag} </span>;
          })}
        </p>
      </div>
    );
  };
  
  
  export default FlowerBody