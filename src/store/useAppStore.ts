import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import {devtools} from "zustand/middleware"
import {createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import {NotificationSliceType, createNotificationSlice} from "./notificationSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType >()(
    devtools(
        (...a) => ({
        ...createRecipesSlice(...a),
        ...createFavoritesSlice(...a),
        ...createNotificationSlice(...a)
        })
    )
)