import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext.jsx';
import RecipeList from './RecipeList';
import DisplayRecipe from './DisplayedRecipe.jsx';

const MainContainer = () => {
  const { recipe } = useContext(RecipeContext);
  const [currentRecipe, setCurrentRecipe] = recipe;
  console.log(currentRecipe);
  return (
    <div>
      <div>New Recipe</div>
      {currentRecipe ? <DisplayRecipe /> : null}
      <RecipeList />
    </div>
  );
};

export default MainContainer;
