import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext.jsx';
import RecipeList from './RecipeListComponent/RecipeList.jsx';
import DisplayRecipe from './RecipeDisplayComponent/RecipeDisplayContainer';
import RecipeForm from './RecipeFormComponent/RecipeForm.jsx';
import NewRecipeBtn from './Nav/NewRecipeBtn';
import ListDropDown from './Nav/RecipeListDropDown';
const MainContainer = () => {
  const { recipe, displayForm } = useContext(RecipeContext);
  const [currentRecipe] = recipe;
  const [displayRecipeForm] = displayForm;

  return (
    <div>
      {displayRecipeForm ? (
        <div>
          <ListDropDown />
          <h1>Create Recipe</h1>
          <RecipeForm />
        </div>
      ) : (
        <div>
          {currentRecipe ? (
            <DisplayRecipe />
          ) : (
            <div>
              <NewRecipeBtn />
              <h1>Your Recipes</h1>
              <RecipeList />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
