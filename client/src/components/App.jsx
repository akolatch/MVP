import React, { useState, useEffect } from 'react';
import { RecipeProvider } from './RecipeContext.jsx';
import RecipeList from './RecipeList';
export const App = () => {
  return (
    <div className='main-container'>
      <h1>Recipes</h1>
      <div>New Recipe</div>
      <RecipeProvider>
        <div>Current Recipe</div>
        <RecipeList />
      </RecipeProvider>
    </div>
  );
};

// export default App;
