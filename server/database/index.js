const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/recipesRolodex';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const recipesSchema = new mongooser.Schema({
  name: { type: String, index: true },
  recipe_id: { type: Number, index: true },
  ingredientLis: Array,
  steps: Array,
  tools: Array,
  time: Number,
  servings: Number,
  difficulty: Number,
  version: { type: Number, index: true },
  created_by: { type: Number, index: true },
  source: String,
  created_at: { type: Number, index: true },
  updated_at: { type: Number, index: true },
});

const userSchema = new mongoose.Schema({
  name: String,
  user_id: Number,
});

const Recipe = mongoose.model('Recipe', recipesSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Recipe,
  User,
};
