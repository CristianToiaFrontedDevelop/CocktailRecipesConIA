import { Drink, SearchFilter } from './../types/index';
import axios from 'axios';
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema';


export async function getCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  const { data } = await axios(url)
  console.log(data)
  const result = CategoriesAPIResponseSchema.safeParse(data)
  if(result.success) {
    return result.data
  }
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
  const { data } = await axios(url)
  console.log(data)
  const result = DrinksAPIResponse.safeParse(data)
  if(result.success) {
    return result.data
  }
}

export async function getRecipeById(id: Drink['idDrink']) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const { data } = await axios(url)
  console.log(data)
  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
  if(result.success) {
    return result.data
  }
}