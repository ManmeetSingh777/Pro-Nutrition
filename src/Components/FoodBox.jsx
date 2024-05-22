import React, { useState } from 'react';

const FoodBox = ({ food, onAdd, onReset }) => {
  const [quantity,setQuantity] = useState(0)
  const [selectedQuantity, setSelectedQuantity] = useState(0); 

  const handleAdd = () => {
    setSelectedQuantity(quantity);
    
  };

  const handleSubtract = () => {
    if (selectedQuantity > 0) {
      const newQuantity = selectedQuantity - 1;
      setSelectedQuantity(newQuantity);
    }
  };

  const handleReset = () => {
    setSelectedQuantity(0);
    onReset(food.name);
  };
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  return (
    <div className="food-container">
      <div className="food-row">
        <div className="food-image">
          <img src={food.img} alt={food.name} />
        </div>
        <div className="food-details">
          <p>
            <strong>{food.name}</strong>
          </p>
          <p>{food.cal} cal</p>
        </div>
        <div className="food-input">
          <input className="input" type="number" value={quantity} onChange={handleInputChange} />     
          <button className="button is-info" onClick={handleAdd}>+</button>
        </div>
      </div>
      {selectedQuantity >= 0 && (
        <div className="food-selected">
          <p><strong>{selectedQuantity} {food.name} = {selectedQuantity * food.cal} cal</strong></p>
          <button className="reset" onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default FoodBox;