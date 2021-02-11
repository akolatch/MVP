import React from 'react';

const UpdateIngredient = ({ ingredient, onChange, index }) => {
  return (
    <div>
      <input
        type='text'
        name='amount'
        placeholder='amount'
        defaultValue={ingredient.amount}
        onChange={(e) => {
          onChange(index, e.target.name, e.target.value);
        }}
      />
      <input
        type='text'
        name='unit'
        placeholder='units'
        defaultValue={ingredient.unit}
        onChange={(e) => {
          onChange(index, e.target.name, e.target.value);
        }}
      />
      <input
        type='text'
        name='ingredient'
        placeholder='ingredient'
        defaultValue={ingredient.ingredient}
        onChange={(e) => {
          onChange(index, e.target.name, e.target.value);
        }}
      />
    </div>
  );
};

export default UpdateIngredient;
