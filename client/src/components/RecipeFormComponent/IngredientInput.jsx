import React, { useState } from 'react';

const IngredientInput = () => {
  const [ingredient, setIngredient] = useState({});
  const onChange = (e) => {
    setIngredient((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <input
        type='text'
        name='amount'
        value={ingredient.amount}
        onChange={onchange}
      />
      <input
        type='text'
        name='unit'
        value={ingredient.unit}
        onChange={onchange}
      />
      <input
        type='text'
        name='ingredient'
        value={ingredient.ingredient}
        onChange={onchange}
      />
    </div>
  );
};

export default IngredientInput;
