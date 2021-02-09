const { Recipe } = require('../database');

module.exports = {
  findAllRecipes: async (created_by) => {
    return await Recipe.find(created_by)
      .sort({
        name: 1,
        recipe_id: 1,
        version: 1,
      })
      .lean();
  },
  createRecipe: async (recipeData) => {
    // if this is a brand new recipe not a version
    if (!recipeData.hasOwnProperty(recipe_id)) {
      const { recipe_id } = await Recipe.findOne({}, { recipe_id: 1, _id: 0 })
        .sort({ recipe_id: 1 })
        .lean();
      recipeData.recipe_id = nextId;
    }
    await Recipe.create(recipeData);
  },
  updateRecipe: async (id, updatesData) => {
    await Recipe.findByIdAndUpdate(id, updatesData);
  },
  deleteRecipeVersion: async (id) => {
    await Recipe.findByIdAndDelete(id);
  },
  deleteAllRecipeVersions: async (recipe_id) => {
    await Recipe.deleteMany({ recipe_id });
  },
};
