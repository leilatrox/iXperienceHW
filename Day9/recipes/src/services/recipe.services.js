import {
  collection, addDoc,
  query, getDocs,
  doc, 
  deleteDoc,
} from 'firebase/firestore'

import {db} from '../firebase/firebase';
import { Recipe } from '../models/Recipe';

class RecipeService{
  constructor() {
    this.collection = 'recipes';
  }
  async createRecipe(recipe) {
    const collRef = collection(db, this.collection);

    const docRef = await addDoc(collRef, {
      name: recipe.name,
      time: recipe.time,
      description: recipe.description,
    });
    recipe.id = docRef.id;
    return recipe;
  }

  async fetchRecipes() {
    const collRef = collection(db, this.collection);
    const q = query(collRef);
    const queSnap = await getDocs(q);

    const recipes = [];
    queSnap.forEach((doc) => {
      const data = doc.data();
      const recipe = new Recipe(
        data.name, data.time, data.description, doc.id,
      );
      recipes.push(recipe);
    });
    return recipes;
  }

  async deleteRecipe(id) {
    const docRef = doc(db, this.collection, id);
    await deleteDoc(docRef);
  }
  
}

const service = new RecipeService();

export default service;