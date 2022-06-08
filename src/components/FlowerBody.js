import React from 'react'



const FlowerBody = ({title, price}) => {  
    return (
      <div className="flower-body">
          <h5 className="flower-title">{title}</h5>
          <p className="flower-price">{price}</p>
          {/* <p className="flower-tags">{tags}</p> */}
        </div>
    );
  };
  
  //export the component
  export default FlowerBody