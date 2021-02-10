import React, { useState } from 'react';

const IngredientInputHook = () => {
  const [ingredient, setIngredient] = useState({});

  const inputIngredient = (e) => {
    setIngredient((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return [ingredient, setIngredient, inputIngredient];
};

export default IngredientInputHook;
