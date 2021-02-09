import React, { useState, useEffect } from 'react';
import { RecipeListProvider } from '../context/RecipeListContext.jsx';
import RecipeList from './RecipeList';
export const App = () => {
  return (
    <RecipeListProvider>
      <h1>Recipes</h1>
      <div>New Recipe</div>
      <RecipeList />
      <div>Current Recipe</div>
    </RecipeListProvider>
  );
};

// export default App;
