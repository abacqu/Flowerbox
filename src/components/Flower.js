import React from 'react';
import FlowerBody from './FlowerBody';
import data from '../flowerData';

const Flowers = () => {
    return (
      <div className="flower-container">
        {data.map((item, idx) => {
          return (
            <FlowerBody
              key={idx}
              name={item.name}
              price={item.price}
              image={item.image}
              tags={item.tags}
            />
          );
        })}
      </div>
    );
  };
  
  export default Flowers;