import React from 'react';
import { RecipeProvider } from './RecipeContext.jsx';
import Main from './MainContainer.jsx';
export const App = () => {
  return (
    <div className='main-container'>
      <h1>Recipes</h1>
      <RecipeProvider>
        <Main />
      </RecipeProvider>
    </div>
  );
};

// export default App;
