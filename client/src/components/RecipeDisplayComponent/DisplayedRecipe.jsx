import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
import Ingredient from './Ingredient.jsx';
import minutesToHours from './timeConverter.js';

const DisplayedRecipe = () => {
  const { recipe, version } = useContext(RecipeContext);
  const [currentRecipe] = recipe;
  const [currentVersion] = version;

  const time = currentRecipe.versions[currentVersion].hasOwnProperty('time')
    ? minutesToHours(currentRecipe.versions[currentVersion].time)
    : null;
  const activeTime = currentRecipe.versions[currentVersion].hasOwnProperty(
    'active_time'
  )
    ? minutesToHours(currentRecipe.versions[currentVersion].active_time)
    : null;

  return (
    <div>
      <h1>{currentRecipe.name}</h1>
      <ul>
        {currentRecipe.versions[currentVersion].hasOwnProperty('difficulty') ? (
          <li>
            {`Difficulty: ${currentRecipe.versions[currentVersion].difficulty} out of 5`}
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
