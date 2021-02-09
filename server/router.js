const router = require('express').Router();
const controller = require('./controllers');

router.route('/:user').get(controller.getRecipeList).post(controller.addRecipe);

router
  .route('/:id')
  .put(controller.updateRecipe)
  .delete(controller.deleteOneVersion);

router.route('/:recipeId').delete(controller.deleteAllVersions);

module.exports = router;
