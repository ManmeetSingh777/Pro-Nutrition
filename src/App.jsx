import React, { useState } from 'react';
import FoodBox from './Components/FoodBox';
import foodsData from './Components/Food'; 
import './Components/Food.css';

const App = () => {
  const [foods, setFoods] = useState(foodsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleAddFood = (food) => {
    const existingFoodIndex = selectedFoods.findIndex((item) => item.name === food.name);

    if (existingFoodIndex !== -1) {
      const updatedSelectedFoods = [...selectedFoods];
      updatedSelectedFoods[existingFoodIndex].quantity += 1;
      setSelectedFoods(updatedSelectedFoods);
    } else {
      setSelectedFoods([...selectedFoods, { ...food, quantity: 1 }]);
    }
  };

  const handleResetFood = (foodName) => {
    const updatedSelectedFoods = selectedFoods.filter((item) => item.name !== foodName);
    setSelectedFoods(updatedSelectedFoods);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="search-heading">Search</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {filteredFoods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
          onAdd={() => handleAddFood(food)}
          onReset={() => handleResetFood(food.name)}
        />
      ))}
    </div>
  );
};

export default App;
