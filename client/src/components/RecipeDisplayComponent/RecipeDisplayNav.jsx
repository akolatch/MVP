import React, { useState, useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
import NewRecipeBtn from '../Nav/NewRecipeBtn';
import RecipeList from '../Nav/RecipeListDropDown';
const RecipeDisplayNav = () => {
  return (
    <div>
      <NewRecipeBtn />
      <RecipeList />
    </div>
  );
};

export default RecipeDisplayNav;
