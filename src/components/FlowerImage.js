import React from 'react';

const FlowerImage = ({img}) => {
  // {img: "url"}
  return (
    <img
      src={img}
      className="flower-img-top"
      alt="..."
    />
  );
};

export default FlowerImage;