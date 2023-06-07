import { createSelector } from 'reselect';

const selectCartItemsReducer = (state) => state.categories;

export const selectCategories = createSelector([selectCartItemsReducer], (cartItemSlice) => cartItemSlice.categories);
