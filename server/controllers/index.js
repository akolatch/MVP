const models = require('../models');

module.exports = {
  getRecipeList: async (req, res) => {
    try {
      const userId = parseInt(req.params.user);
      const recipeList = await models.findAllRecipes(userId);
      res.status(200).json(recipeList);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  addRecipe: async (req, res) => {
    try {
      const recipeData = req.body.recipeData;
      const listData = req.body.listData;
      recipeData.created_at = Date.now();
      await models.createNewRecipe(recipeData, listData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      const recipe_id = req.query.recipe_id;
      await models.deleteRecipe(recipe_id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  addVersion: async (req, res) => {
    try {
      const recipeData = req.body.recipeData;
      recipeData.created_at = Date.now();
      await models.createVersion(recipeData);
      res.sendStatus(201);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  updateVersion: async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = req.body;
      updateData.updated_at = Date.now();
      await models.updateVersion(id, updateData);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },

  deleteVersion: async (req, res) => {
    try {
      const id = req.params.id;
      await models.deleteVersion(id);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
};
