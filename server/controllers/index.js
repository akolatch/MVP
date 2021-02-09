const models = require('../models');

module.exports = {
  getRecipeList: async (req, res) => {
    try {
      const userId = parseInt(req.params.user);
      const sortBy = req.query;
      const recipeList = await models.findAllRecipes(userId, sortBy);
      res.status(200).json(recipeList);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  addRecipe: async (req, res) => {
    try {
      const recipeData = req.body;
      recipeData.created_at = Date.now();
      await models.addRecipe(recipeData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  updateRecipe: async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      updateData.updated_at = Date.now();
      await models.updateRecipe(id, updateData);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  deleteOneVersion: async (req, res) => {
    try {
      const _id = req.params.id;
      await models.delete({ _id });
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  deleteAllVersions: async (req, res) => {
    try {
      const recipe_id = parsInt(req.params.recipeId);
      await models.delete({ recipe_id });
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
