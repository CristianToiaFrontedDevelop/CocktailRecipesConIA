import { Categories, Drink, Drinks, Recipe, SearchFilter } from './../types/index';
import { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipes } from "../services/RepiceService";




export type RecipesSliceType = {
  categories: Categories,
  drinks: Drinks
  selectedRecipe: Recipe
  modal: boolean
  fetchCategories: () => Promise<void>
  searchRecipes: (SearchFilters: SearchFilter) => Promise<void>
  selectRecipe: (id: Drink['idDrink']) => Promise<void>
  closeModal: () => void
}

export const createRecipeSlice : 

StateCreator<RecipesSliceType> = (set) => ({

  categories: {
    drinks: []
  },

  drinks: {
    drinks: []
  },

  selectedRecipe: {} as Recipe,

  modal: false,

  fetchCategories: async () => {
    const categories = await getCategories()
    set({
      categories})
  },
  
  searchRecipes: async (SearchFilters) => {
    const drinks= await getRecipes(SearchFilters)
    set({
      drinks
    })
  },

  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id)
    set({
      selectedRecipe,
      modal: true
    })
  },

  closeModal: () => {
    set ({
      modal: false,
      selectedRecipe: {} as Recipe
    })
  }
  
})

