import React from 'react';
const Ingredient = ({ ingredient }) => (
  <div>
    {ingredient.hasOwnProperty('amount') ? (
      <span>{`${ingredient.amount} `}</span>
    ) : null}
    <span>{ingredient.unit}</span>
    <span>{` ${ingredient.ingredient}`}</span>
  </div>
);

export default Ingredient;
