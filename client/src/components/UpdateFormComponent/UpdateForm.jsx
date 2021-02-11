import React, { useState, useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
import IngredientInput from '../RecipeFormComponent/IngredientInput.jsx';
import IngredientInputHook from '../RecipeFormComponent/IngredientInputHook.jsx';
import StepsHook from '../RecipeFormComponent/StepsHook.jsx';
import ToolsHook from '../RecipeFormComponent/ToolsHook.jsx';
import OptionalUpdateField from './OptionalUpdateField.jsx';
import UpdateArrayField from './UpdateArrayField.jsx';
import UpdateIngredient from './UpdateIngredient.jsx';
import useOptionalField from './UseOptionalField.jsx';

const literalFields = [
  'servings',
  'time',
  'active_time',
  'difficulty',
  'source',
];

const UpdateForm = () => {
  const { recipe, version } = useContext(RecipeContext);
  const [tool, setTool, inputTool] = ToolsHook();
  const [step, setStep, inputStep] = StepsHook();
  const [currentVersion] = version;
  const [currentRecipe] = recipe;
  const [updateRecipe, setUpdateRecipe] = useState({
    ...currentRecipe.versions[currentVersion],
  });
  const [
    newIngredient,
    setNewIngredient,
    newInputIngredient,
  ] = IngredientInputHook();

  const [displayField, toggleField] = useOptionalField({
    ingredientList: false,
    steps: false,
    servings: updateRecipe.hasOwnProperty('servings'),
    source: updateRecipe.hasOwnProperty('source'),
    difficulty: updateRecipe.hasOwnProperty('difficulty'),
    time: updateRecipe.hasOwnProperty('time'),
    active_time: updateRecipe.hasOwnProperty('active_time'),
    tools: false,
  });

  const updateIngredient = (index, section, value) => {
    setUpdateRecipe((prevState) => {
      const newIngredientList = [...prevState.ingredientList];
      newIngredientList[index][section] = value;
      return {
        ...prevState,
        ingredientList: newIngredientList,
      };
    });
    console.log(updateRecipe);
  };

  const addIngredient = () => {
    setUpdateRecipe((prevState) => {
      const newIngredientList = [...prevState.ingredientList, newIngredient];
      return {
        ...prevState,
        ingredientList: newIngredientList,
      };
    });
    setNewIngredient({
      amount: '',
      unit: '',
      ingredient: '',
    });
  };

  const updateArrayField = (field, index, value) => {
    setUpdateRecipe((prevState) => {
      const newField = [...prevState[field]];
      newField[index] = value;
      return {
        ...prevState,
        [field]: newField,
      };
    });
  };

  const addArrayField = (field, newValue) => {
    setUpdateRecipe((prevState) => {
      const value = [...prevState[field], newValue];
      return {
        ...prevState,
        [field]: value,
      };
    });
    setStep('');
    setTool('');
  };

  const updateField = (field, value) => {
    setUpdateRecipe((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };
  return (
    <div>
      <form action=''>
        <label htmlFor=''>Ingredients</label>
        <br />
        <ul>
          {updateRecipe.ingredientList.map((ingredient, i) => (
            <UpdateIngredient
              ingredient={ingredient}
              key={`${i}ing`}
              onChange={updateIngredient}
              index={i}
            />
          ))}
          {displayField.ingredientList ? (
            <div>
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
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleField('ingredientList', true);
              }}
            >
              More Ingredients{' '}
            </button>
          )}
        </ul>
        <br />
        <label htmlFor=''>Steps</label>
        <br />
        <ol>
          <UpdateArrayField
            field={'steps'}
            category={updateRecipe.steps}
            updateChange={updateArrayField}
            display={displayField.steps}
            setFieldState={inputStep}
            fieldState={step}
            addToField={addArrayField}
            btnLabel={'Add Step'}
            toggleDisplay={toggleField}
          />
        </ol>
        <br />
        {updateRecipe.tools.length > 0 ? <label>Tools</label> : null}
        <ul>
          <UpdateArrayField
            field={'tools'}
            category={updateRecipe.tools}
            updateChange={updateArrayField}
            display={displayField.tools}
            setFieldState={inputTool}
            fieldState={tool}
            addToField={addArrayField}
            btnLabel={'Add Tools'}
            toggleDisplay={toggleField}
          />
        </ul>
        <ul>
          {literalFields.map((field, i) => (
            <OptionalUpdateField
              key={`${i * i}${field}`}
              field={field}
              toggleView={toggleField}
              display={displayField[field]}
              onChange={updateField}
              version={updateRecipe}
            />
          ))}
        </ul>
        <button>Update Version</button>
        <button>Update Version</button>
      </form>
      <pre>{JSON.stringify(updateRecipe, null, 2)}</pre>
    </div>
  );
};
export default UpdateForm;
