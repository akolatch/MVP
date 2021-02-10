import React from 'react';

const IngredientInput = ({ ingredient, onChange }) => {
  return (
    <div>
      <input
        type='text'
        name='amount'
        placeholder='amount'
        value={ingredient.amount}
        onChange={onChange}
      />
      <input
        type='text'
        name='unit'
        placeholder='units'
        value={ingredient.unit}
        onChange={onChange}
      />
      <input
        type='text'
        name='ingredient'
        placeholder='ingredient'
        value={ingredient.ingredient}
        onChange={onChange}
      />
    </div>
  );
};

export default IngredientInput;
