import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
import UpdateForm from './UpdateForm';

const UpdateFormContainer = () => {
  const { recipe, version } = useContext(RecipeContext);
  return (
    <div>
      <h1>{`Update ${recipe[0].name}`}</h1>
      <h3>{`V${recipe[0].versions[version[0]].version}`}</h3>
      <UpdateForm />
    </div>
  );
};

export default UpdateFormContainer;
