import React, { useContext } from 'react';
import { RecipeContext } from '../RecipeContext.jsx';
import axios from 'axios';

const BtnBar = () => {
  const { list, recipe, version, displayForm, displayUpdate } = useContext(
    RecipeContext
  );
  const [, setDisplayUpdateForm] = displayUpdate;
  const [currentRecipe, setCurrentRecipe] = recipe;
  const [, setDisplayRecipeForm] = displayForm;
  const [currentVersion, setCurrentVersion] = version;

  const deleteRecipe = () => {
    axios
      .delete('/1/list', {
        params: { recipe_id: currentRecipe.recipe_id },
      })
      .then(() => {
        return axios.get('/1/list');
      })
      .then(({ data }) => {
        list[1](data);
      })
      .then(() => {
        setCurrentVersion(0);
        setDisplayRecipeForm(false);
        setCurrentRecipe(null);
      });
  };

  const deleteVersion = () => {
    axios
      .delete(`/version/${currentRecipe.versions[currentVersion]._id}`)
      .then(() => {
        return axios.get('/1/list');
      })
      .then(({ data }) => {
        list[1](data);
      })
      .then(() => {
        setCurrentVersion(0);
        setDisplayRecipeForm(false);
        setCurrentRecipe(null);
      });
  };

  const selectVersion = (e) => {
    e.preventDefault();
    setCurrentVersion(e.target.value);
  };
  const updateRecipe = () => {
    setDisplayUpdateForm(true);
  };
  return (
    <div>
      <label htmlFor=''>{`Select Version: `}</label>
      <select name='VersionSelector' onChange={selectVersion}>
        {currentRecipe.versions.map((version, i) => (
          <option key={version.version * i} value={i}>
            {version.version}
          </option>
        ))}
      </select>
      <br />
      <button onClick={updateRecipe}>Edit</button>
      <button onClick={deleteRecipe}>Delete Recipe</button>
      {currentRecipe.versions.length > 1 ? (
        <button onClick={deleteVersion}>Delete Version</button>
      ) : null}
    </div>
  );
};

export default BtnBar;
