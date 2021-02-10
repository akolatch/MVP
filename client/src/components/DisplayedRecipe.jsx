import React, { useContext, useState } from 'react';
import { RecipeContext } from './RecipeContext.jsx';
import Ingredient from './Ingredient.jsx';
const minutesToHours = (inMinutes) => {
  if (inMinutes >= 60) {
    const hours = Math.floor(inMinutes / 60);
    const minutes = inMinutes - hours * 60;
    const hourString = hours > 1 ? `${hours} hours` : `${hours} hour`;
    return minutes >= 2
      ? `${hourString}, ${minutes} minutes`
      : minutes === 1
      ? `${hourString}, ${minutes} minute`
      : hourString;
  }
  return inMinutes > 1 ? `${inMinutes} minutes` : `${inMinutes} minute`;
};

const DisplayedRecipe = () => {
  const { recipe, version } = useContext(RecipeContext);
  const [currentRecipe, setCurrentRecipe] = recipe;
  const [currentVersion, setCurrentVersion] = version;

  const time = currentRecipe.versions[currentVersion].hasOwnProperty('time')
    ? minutesToHours(currentRecipe.versions[currentVersion].time)
    : null;
  const activeTime = currentRecipe.versions[currentVersion].hasOwnProperty(
    'active_time'
  )
    ? minutesToHours(currentRecipe.versions[currentVersion].active_time)
    : null;
  console.log(currentRecipe.versions[currentVersion].ingredientList);
  return (
    <div>
      <h1>{currentRecipe.name}</h1>
      <ul>
        {currentRecipe.versions[currentVersion].hasOwnProperty('difficulty') ? (
          <li>
            {`Difficulty: ${currentRecipe.versions[currentVersion].difficulty}`}
          </li>
        ) : null}
        {time ? <li>{`Total Time : ${time}`}</li> : null}
        {activeTime ? <li>{`Active Time: ${activeTime}`}</li> : null}
        {currentRecipe.versions[currentVersion].hasOwnProperty('servings') ? (
          <li>{`Serves: ${currentRecipe.versions[currentVersion].servings}`}</li>
        ) : null}
      </ul>
      <h3>Ingredients</h3>
      <div>
        {currentRecipe.versions[currentVersion].ingredientList.map(
          (ingredient, i) => (
            <Ingredient ingredient={ingredient} key={i} />
          )
        )}
      </div>
      <h3>Steps</h3>
      <ol>
        {currentRecipe.versions[currentVersion].steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default DisplayedRecipe;
