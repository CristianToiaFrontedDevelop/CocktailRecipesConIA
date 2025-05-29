import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { AISliceType, createAISlice } from "./aiSlice";


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools( (...a) => ({
  ...createRecipeSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
  ...createAISlice(...a)
})))