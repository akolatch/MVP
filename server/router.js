const router = require('express').Router();
const controller = require('./controllers');

router
  .route('/:user/list')
  .get(controller.getRecipeList)
  .post(controller.addRecipe)
  .delete(controller.deleteRecipe);

router.route('/version').post(controller.addVersion);

router
  .route('/version/:id')
  .put(controller.updateVersion)
  .delete(controller.deleteVersion);

module.exports = router;
