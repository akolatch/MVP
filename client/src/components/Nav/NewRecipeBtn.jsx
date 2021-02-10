import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
const NewRecipeBtn = () => {
  const { displayForm } = useContext(RecipeContext);
  const [, setDisplayRecipeForm] = displayForm;
  const showForm = () => {
    setDisplayRecipeForm(true);
  };
  return <button onClick={showForm}>New Recipe</button>;
};

export default NewRecipeBtn;
