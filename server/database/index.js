const mongoose = require('mongoose');
// const mongoUri = 'mongodb://localhost/recipesRolodex';
const mongoUri = 'mongodb://mongo:27017/recipesRolodex';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const recipesSchema = new mongoose.Schema({
  recipe_id: { type: Number, index: true },
  ingredientList: Array,
  steps: Array,
  tools: Array,
  time: Number,
  active_time: Number,
  servings: Number,
  difficulty: Number,
  version: { type: Number, index: true },
  user_id: { type: Number, index: true },
  source: String,
  created_at: { type: Number, index: true },
  updated_at: { type: Number, index: true },
});

const recipeListsSchema = new mongoose.Schema({
  name: { type: String, index: true },
  user_id: { type: Number, index: true },
  recipe_id: { type: Number, index: true },
});
// const userSchema = new mongoose.Schema({
//   name: String,
//   user_id: Number,
// });

const Recipe = mongoose.model('Recipe', recipesSchema);
const RecipeList = mongoose.model('RecipeList', recipeListsSchema);

module.exports = {
  Recipe,
  RecipeList,
};
