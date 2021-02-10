import React, { useContext, useState } from 'react';
import { RecipeContext } from './RecipeContext.jsx';

const RecipeList = ({ name, versions, index }) => {
  const { list, recipe, version } = useContext(RecipeContext);
  const [recipeList] = list;
  const [currentRecipe, setCurrentRecipe] = recipe;
  const [currentVersion, setCurrentVersion] = version;
  const [thisVersion, setThisVersion] = useState(0);

  const selectVersion = (e) => {
    e.preventDefault();
    setThisVersion(e.target.value);
  };

  const selectRecipe = (e) => {
    e.preventDefault();
    setCurrentRecipe(recipeList[index]);
    setCurrentVersion(thisVersion);
    console.log(currentRecipe);
  };

  return (
    <div>
      <button onClick={selectRecipe}>{name}</button>
      <select name='versionSelector' onChange={selectVersion}>
        {versions.map((version, i) => (
          <option key={version} value={i}>
            {version}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecipeList;
