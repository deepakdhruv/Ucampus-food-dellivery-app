import React, { useState } from 'react';

function Card(props) {
  const { options, image, foodName } = props;
  const priceOptions = Object.keys(options);
  
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default quantity is 1
  const [selectedOption, setSelectedOption] = useState(priceOptions[0]); // Default to first option

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    const pricePerUnit = options[selectedOption]; // Get the price for the selected option
    return pricePerUnit * selectedQuantity; // Total price = price * quantity
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem', maxHeight: '360px' }}>
        <img src={image} className="card-img-top" alt="Card image cap" style={{ height: "120px", objectFit: "cover" } }/>
        <div className="card-body">
          <h5 className="card-title">{foodName}</h5>

          <div className='container w-100'>
            {/* Quantity Selector */}
            <select 
              className='m-2 h-100 bg-success'
              onChange={(e) => setSelectedQuantity(e.target.value)}
              value={selectedQuantity}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i+1} value={i+1}>{i+1}</option>
                );
              })}
            </select>

            {/* Price Option Selector */}
            <select 
              className='m-2 h-100 bg-success rounded'
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data} - ₹{options[data]}
                  </option>
                );
              })}
            </select>

            {/* Total Price */}
            <div className='d-inline h-100 fs-5'>
            Total Price: ₹{calculateTotalPrice()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
