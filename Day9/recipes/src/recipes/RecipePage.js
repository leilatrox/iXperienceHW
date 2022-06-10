import React, {useState, useEffect} from 'react'
import RecipeService from '../services/recipe.services'

import RecInputs from '../components/RecInputs'
import RecTable from '../components/RecTable'

import {Recipe} from '../models/Recipe'

export default function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!recipes.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    const recipes = await RecipeService.fetchRecipes();
    setRecipes(recipes);
  }

  async function onRecipeCreate(name,time,desc) {
    const recipe = await RecipeService.createRecipe(new Recipe(name,time,desc, null));
    setRecipes([...recipes, recipe]);
  }

  async function onRecipeRemove(id) {
    //filter task with the id out
    await RecipeService.deleteRecipe(id);
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <div className='container m-5'>
      <div className='card card-body'>
        <h1 className='text-center'>Recipes</h1>
        <RecInputs onRecipeCreate={onRecipeCreate}/>
        <RecTable onRecipeRemove={onRecipeRemove} recipes={recipes}/>
      </div>
    </div>
  )
}