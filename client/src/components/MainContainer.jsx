import React, { useContext, useState } from 'react';
import { RecipeContext } from './RecipeContext.jsx';
import RecipeList from './RecipeList';
import DisplayRecipe from './DisplayedRecipe.jsx';
import RecipeForm from './RecipeForm.jsx';

const MainContainer = () => {
  const { recipe, displayForm } = useContext(RecipeContext);
  const [currentRecipe, setCurrentRecipe] = recipe;
  const [displayRecipeForm, setDisplayRecipeForm] = displayForm;

  const showForm = () => {
    setDisplayRecipeForm(true);
  };
  return (
    <div>
      {displayRecipeForm ? (
        <RecipeForm />
      ) : (
        <div>
          <button onClick={showForm}>New Recipe</button>
          {currentRecipe ? <DisplayRecipe /> : null}
          <RecipeList />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
