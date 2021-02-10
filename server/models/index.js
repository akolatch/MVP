const { Recipe, RecipeList } = require('../database');
module.exports = {
  findAllRecipes: async (user_id) => {
    return await RecipeList.aggregate()
      .match({ user_id })
      .sort({ name: 1 })
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
            $sort: { version: 1 },
          },
        ],
        as: 'versions',
      });
  },

  createNewRecipe: async (recipeData, listData) => {
    await RecipeList.create(listData);
    await Recipe.create(recipeData);
  },

  createVersion: async (recipeData) => {
    await Recipe.create(recipeData);
  },

  updateVersion: async (id, updatesData) => {
    await Recipe.findByIdAndUpdate(id, updatesData);
  },

  deleteVersion: async (id) => {
    await Recipe.findByIdAndDelete(id);
  },

  deleteRecipe: async (recipe_id) => {
    await RecipeList.findOneAndDelete({ recipe_id });
    await Recipe.deleteMany({ recipe_id });
  },
};
