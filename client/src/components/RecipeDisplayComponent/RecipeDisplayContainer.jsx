import React from 'react';
import Recipe from './DisplayedRecipe';
import DisplayNav from './RecipeDisplayNav';
import BtnBar from './RecipeDisplayActions';

const RecipeDisplayContainer = () => (
  <div>
    <DisplayNav />
    <Recipe />
    <BtnBar />
  </div>
);
export default RecipeDisplayContainer;
