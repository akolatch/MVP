const { Recipe, RecipeList } = require('../database');

module.exports = {
  findAllRecipes: async (
    user_id,
    sortBy = {
      name: 1,
      recipe_id: 1,
      version: 1,
    }
  ) => {
    try {
      return await RecipeList.aggregate()
        .match({ user_id })
        .lookup({
          from: 'recipes',
          let: { recipe_id: '$recipe_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$recipe_id', '$recipe_id'],
                },
              },
            },
            {
              $sort: sortBy,
            },
          ],
          as: 'versions',
        });
    } catch (err) {
      throw err;
    }
  },
  addRecipe: async (recipeData) => {
    // if this is a brand new recipe not a version
    if (!recipeData.hasOwnProperty('recipe_id')) {
      const { recipe_id } = await RecipeList.findOne(
        {},
        { recipe_id: 1, _id: 0 }
      )
        .sort({ recipe_id: 1 })
        .lean();
      recipe_id++;
      recipeData.recipe_id = recipe_id;
      await RecipeList.create({ user_id: recipeData.created_by, recipe_id });
    }
    await Recipe.create(recipeData);
  },
  updateRecipe: async (id, updatesData) => {
    await Recipe.findByIdAndUpdate(id, updatesData);
  },
  delete: async (id) => {
    await Recipe.deleteMany(id);
  },
};
