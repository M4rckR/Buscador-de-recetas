import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeServices"
import type {Categories, SearchFilter, Drinks, Drink, Recipe} from "../types"



export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal:boolean,
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter:SearchFilter) => Promise<void>
    selectRecipe: (id:Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipesSlice:StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    drinks: {
        drinks: []
    },
    modal: false,
    selectedRecipe: {} as Recipe,
    fetchCategories: async() => {
        const categories = await getCategories() 
        set({
            categories
        })
    },
    searchRecipes: async(filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async(id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})      