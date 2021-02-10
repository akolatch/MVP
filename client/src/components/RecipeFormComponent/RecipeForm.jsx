import React, { useState, useContext } from 'react';
import { RecipeContext } from '../RecipeContext';
import OptionalField from './OptionalField';
import OptionalFieldHook from './OptionalFieldHook';
import NewVersionHook from './NewVersionHook';
import IngredientInputHook from './IngredientInputHook';
import IngredientInput from './IngredientInput';
import AddedIngredient from '../RecipeDisplayComponent/Ingredient';
import ToolHook from './ToolsHook';
import ExpandingFields from './ExpandingArrayFields';
import StepHook from './StepsHook';
import axios from 'axios';

const literalFields = [
  'servings',
  'time',
  'active_time',
  'difficulty',
  'source',
];

const initialVersionState = {
  ingredientList: [],
  tools: [],
  steps: [],
  user_id: 1,
  version: 1,
};

const RecipeForm = () => {
  const { list, newUserRecipe, recipeWasAdded } = useContext(RecipeContext);
  const [newRecipe, setNewRecipe] = newUserRecipe;
  initialVersionState.recipe_id = newRecipe.recipe_id;
  const [newVersion, setNewVersion, inputField] = NewVersionHook(
    initialVersionState
  );
  const [displayField, toggleOptionalField] = OptionalFieldHook();
  const [
    newIngredient,
    setNewIngredient,
    newInputIngredient,
  ] = IngredientInputHook();
  const [tool, setTool, inputTool] = ToolHook();
  const [step, setStep, inputStep] = StepHook();

  const setName = (e) => {
    setNewRecipe((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
    console.log(newRecipe);
  };

  const addIngredient = () => {
    const value = [...newVersion.ingredientList, newIngredient];
    inputField('ingredientList', value);
    setNewIngredient({
      amount: '',
      unit: '',
      ingredient: '',
    });
  };

  const addTool = () => {
    const value = [...newVersion.tools, tool];
    inputField('tools', value);
    setTool('');
  };

  const addStep = () => {
    const value = [...newVersion.steps, step];
    inputField('steps', value);
    setStep('');
  };

  const submitRecipe = (e) => {
    e.preventDefault();
    const newRecipeData = {
      listData: newRecipe,
      recipeData: newVersion,
    };

    axios
      .post('/1/list', newRecipeData)
      .then(() => {
        return axios.get('/1/list');
      })
      .then(({ data }) => {
        list[1](data);
      })
      .then(() => {
        recipeWasAdded();
        setNewVersion(initialVersionState);
      });
  };

  return (
    <div>
      <form action=''>
        <label htmlFor=''>Name</label>
        <br />
        <br />
        <input
          type='text'
          name='name'
          value={newRecipe.name}
          onChange={setName}
        />
        <br />
        <label htmlFor=''>Ingredients</label>
        <br />
        {newVersion.ingredientList.map((ingredient, i) => {
          return <AddedIngredient key={i} ingredient={ingredient} />;
        })}
        <IngredientInput
          ingredient={newIngredient}
          onChange={newInputIngredient}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            addIngredient();
          }}
        >
          More Ingredients
        </button>
        <ExpandingFields
          ordered={true}
          fieldList={newVersion.steps}
          label={'Steps'}
          field={'steps'}
          onChange={inputStep}
          fieldState={step}
          addToVersion={addStep}
        />
        {displayField.tools ? (
          <ExpandingFields
            ordered={false}
            fieldList={newVersion.tools}
            label={'Tools'}
            field={'tools'}
            onChange={inputTool}
            fieldState={tool}
            addToVersion={addTool}
          />
        ) : (
          <div>
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleOptionalField('tools', true);
              }}
            >
              Add Tool List
            </button>
          </div>
        )}
        {literalFields.map((field, i) => (
          <OptionalField
            field={field}
            display={displayField[field]}
            toggleView={toggleOptionalField}
            version={newVersion}
            onChange={inputField}
            key={`${field}${i}`}
          />
        ))}
        <br />
        <button onClick={submitRecipe}>Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
