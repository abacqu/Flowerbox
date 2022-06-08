import React from 'react'



const Footer = () => {  
    return (
        <div className='footer'>
          <div className="footer-section">
            <img src="https://i.imgur.com/KxfWH9J.png" alt="logo" />
            <p>Flowerbox/Est. 2019</p>
            <div className="footer-icons">
              icons
            </div>
          </div>
          <div className="footer-section">
            <p>customer service</p>
            <ul>
              <li>Satisfaction Commitment</li>
              <li>Delivery Policies</li>
              <li>Cancellations</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <p>flowerbox</p>
            <ul>
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
              <li>Career Opportunities</li>
              <li>More Information</li>
            </ul>
          </div>
        </div>
      );
    };
    
  
  export default Footer