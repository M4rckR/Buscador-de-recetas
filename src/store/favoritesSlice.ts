import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice"
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice"

export type FavoritesSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe:Recipe) => void
    favoriteExist: (id:Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice:StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set,get, api) =>  ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favorites.some(fav => fav.idDrink === recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get ,api).showNotification({
                text: 'Receta eliminada de favoritos',
                error: false
            })
        }
        else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get ,api).showNotification({
                text: 'Receta añadida de favoritos',
                error: false
            })
        }
        createRecipesSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {
        return get().favorites.some(fav => fav.idDrink === id)
    },
    loadFromStorage: () => {
        const storeFavorites = localStorage.getItem('favorites')
        if(storeFavorites){
            set({
                favorites: JSON.parse(storeFavorites)
            })
        }
    }
})