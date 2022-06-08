import React from 'react';
import FlowerBody from './FlowerBody';
import FlowerImage from './FlowerImage';

const Flower = (props) => {
   
 
    return (
      <div className="flower" style={{ width: '18rem' }}>
        <FlowerImage img={props.img}/>
        
        <FlowerBody
           {...props}
        //   title={props.title}
        //   price={props.price}
          // tags={props.tags}
          
          />
      </div>
    );
  };
  
  //export the components
  export default Flower;