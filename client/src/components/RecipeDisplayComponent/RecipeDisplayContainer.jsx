import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
import Recipe from './DisplayedRecipe';
import DisplayNav from './RecipeDisplayNav';
import BtnBar from './RecipeDisplayActions';
import UpdateForm from '../UpdateFormComponent/UpdateFormContainer';

const RecipeDisplayContainer = () => {
  const { displayUpdate } = useContext(RecipeContext);
  const [displayUpdateForm] = displayUpdate;
  return (
    <div>
      <DisplayNav />
      {displayUpdateForm ? (
        <UpdateForm />
      ) : (
        <div>
          <Recipe />
          <BtnBar />
        </div>
      )}
    </div>
  );
};
export default RecipeDisplayContainer;
