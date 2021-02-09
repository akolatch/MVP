import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const RecipeListContext = createContext();

export const RecipeListProvider = (props) => {
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    axios.get('/1/list').then(({ data }) => {
      console.log(data);
      setRecipeList(data);
    });
  }, []);
  return (
    <RecipeListContext.Provider value={[recipeList, setRecipeList]}>
      {props.children}
    </RecipeListContext.Provider>
  );
};
